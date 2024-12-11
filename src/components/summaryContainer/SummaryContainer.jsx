import style from './summaryContainer.module.css';

const SummaryContainer = props => {
	return (
		<div className={`${style.container} ${style[props.infoSummary.color]}`}>
			<div className={style.typeContainer}>
				<img src={props.infoSummary.src} alt={props.infoSummary.type} />
				<span>{props.infoSummary.type}</span>
			</div>
			<div className={style.scoreContainer}>
				<span>{props.infoSummary.score}</span>
				<span>/</span>
				<span>100</span>
			</div>
		</div>
	);
};

export default SummaryContainer;
