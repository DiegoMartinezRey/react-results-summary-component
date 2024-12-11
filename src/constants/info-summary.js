import { v4 } from 'uuid';

export const INFO_SUMMARY = [
	{
		id: v4(),
		type: 'Reaction',
		score: 80,
		color: 'red',
		src: '/public/assets/images/icon-reaction.svg'
	},
	{
		id: v4(),
		type: 'Memory',
		score: 92,
		color: 'yellow',
		src: '/public/assets/images/icon-memory.svg'
	},
	{
		id: v4(),
		type: 'Verbal',
		score: 61,
		color: 'green',
		src: '/public/assets/images/icon-verbal.svg'
	},
	{
		id: v4(),
		type: 'Visual',
		score: 73,
		color: 'blue',
		src: '/public/assets/images/icon-visual.svg'
	}
];
