import style from "./detailRent.module.css";
import arrowBR from "../../../assets/mainPage/arrowsBR.svg"

function DetailRent() {
    return (
		<div className={style.detailRent}>
			<div className={style.detailRentContainer}>
				<h1 className={style.detailRentTitle}>
					<span className={style.detailRentTitleWrap}>
						<span>
							СПИСОК
						</span>
						<img src={arrowBR} alt="arrows" />
						<span>Т<span className={style.accent}>Ц</span></span>
					</span>
					<span>ПОМЕЩЕНИЙ</span>
				</h1>

				<div className={style.descBlock}>
					<img className={style.descBlockImg} src="/images/rent/1.jpg" alt="" />
					<div className={style.descBlockBlockRow}>
						<div className={style.descBlockItem}>
							<h3 className={style.descBlockItemTitle}>#описание</h3>
							<p className={style.descBlockItemText}>«Творческий центр» — это специально выделенный корпус КРСТ для художников, ремесленников и творческих команд. Помещения предназначены для мастерских, фотостудий, залов для йоги и других направлений, которые требуют уединённой и вдохновляющей атмосферы.</p>
						</div>
						<div className={style.descBlocItem}>
							<div className={style.statBlockList}>
								<div className={style.statBlockItem}>
									<div className={style.statBlockNumber}>1 200 м²</div>
									<div className={style.statBlockText}>Площадь корпуса</div>
								</div>

								<div className={style.statBlockItem}>
									<div className={style.statBlockNumber}>150</div>
									<div className={style.statBlockText}>Помещений</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			
        </div>
    );
}
export default DetailRent;