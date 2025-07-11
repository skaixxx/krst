import { useState } from 'react';

import style from './filter.module.css';
import iconClose from '../../assets/filter/close.svg'
import iconArrowDown from '../../assets/filter/arrow-down.svg'

import IconClose from './IconClose'

export default function Filter({tags, selectedTags, onChange, isOpen, onToggle}) {
	
	const togglePopup = () => onToggle(!isOpen);
	const closePopup = () => onToggle(false);

	const toggleTag = (tag, e) => {
		
		e.stopPropagation();
		
		const isSelected = selectedTags.includes(tag);
		const newTags = isSelected

		? selectedTags.filter(t => t !== tag)
		: [...selectedTags, tag];

		onChange(newTags);
	};

	const clearFilter = () => {
		onChange([]);
	};

	return (
		<div onClick={togglePopup} className={style.filter}>
			<div className={style.filterTags}>
				{selectedTags.length > 0 ? (
					selectedTags.map((tag, index) => (
						<div key={index} className={style.filterTag}>
						<span>{tag}</span>
						<button
							onClick={(e) => toggleTag(tag, e)}
							className={style.filterTagDelete}
						>
							<IconClose />
						</button>
						</div>
					))
				) : (
					<div className={style.filterPlaceholder}>фильтры</div>
				)}
			</div>
			<div className={style.filterActions}>
				<button onClick={clearFilter} className={style.filterBtn}>
					<img src={iconClose} alt="" />
				</button>
				<button className={style.filterBtn} onClick={togglePopup}>
					<img 
						src={iconArrowDown}
						alt=""
						className={`${style.filterBtnArrow} ${isOpen ? style.filterBtnArrowRotated : ''}`}/>
				</button>
			</div>

			{isOpen && (
				<div className={style.filterMenu}>
					<div className={style.filterMenuHeader}>
						<h2 className={style.filterMenuTitle}>Фильтры</h2>
						<button className={style.filterMenuCloseBtn} onClick={closePopup}>
							<img src={iconClose} alt="" />
						</button>
					</div>

					{tags.map((group, index) => (
						<div key={index} className={style.filterMenuGroup}>
							<h3 className={style.filterMenuGroupTitle}>{group.title}</h3>
							<ul className={style.filterMenuGroupTags}>
								{group.tags.map((tag, tagIndex) => {
									const isActive = selectedTags.includes(tag);
									return (
										<li key={tagIndex}>
											<div
												onClick={(e) => toggleTag(tag, e)}
												className={`${style.filterTag} ${isActive ? style.active : ''}`}
											>
												<span>{tag}</span>
												<button className={style.filterTagDelete}>
													<IconClose></IconClose>
												</button>
											</div>
										</li>
									)
								})}
							</ul>
						</div>
					))}
				</div>
			)}
		</div>
	);
};