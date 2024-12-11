import style from './infoCard.module.css';

const InfoCard = () => {
	return (
		<div className={style.container}>
			<span>Your result</span>
			<div className={style.score}>
				<span className={style.scoreTitle}>76</span>
				<span className={style.scoreInterval}>of 100</span>
			</div>
			<div className={style.infoContainer}>
				<span className={style.message}>Great</span>
				<span>
					Your performance exceed 65% of the people conducting the test here!
				</span>
			</div>
		</div>
	);
};

export default InfoCard;
