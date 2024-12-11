import { INFO_SUMMARY } from '../../constants/info-summary';
import InfoCard from '../infoCard/InfoCard';
import SummaryContainer from '../summaryContainer/SummaryContainer';
import style from './containerApp.module.css';

const ContainerApp = () => {
	return (
		<div className={style.container}>
			<InfoCard />
			<section className={style.summary}>
				<h1 className={style.title}>Summary</h1>
				<div className={style.summaryContainer}>
					{INFO_SUMMARY.map(infoSummary => {
						return (
							<SummaryContainer
								key={infoSummary.id}
								infoSummary={infoSummary}
							/>
						);
					})}
				</div>
				<button className={style.button}>Continue</button>
			</section>
		</div>
	);
};

export default ContainerApp;
