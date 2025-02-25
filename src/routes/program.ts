export interface Program {
	name: string;
	fields: string[];
	logo: string;
	open_date: string;
	close_date: string;

	link: string;
	paragraphs: string[];
	school: string[];
	access: string;
	type: string;
	country: string[];
}
export type Programs = { [id: string]: Program };
type ProgramDateGroup = {
	date: string;
	programs: Program[];
};

type ProgramsDateGroup = { [date: string]: Program[] };

function verify_date(date: string): boolean {
	return date.match(/^\d{4}-\d{2}-\d{2}$/) != null;
}

export function group_by_day(programs: Program[]): ProgramsDateGroup {
	const groups: ProgramsDateGroup = {};
	programs.forEach((program) => {
		if (!program.close_date || !verify_date(program.close_date)) {
			return;
		}
		const day = program.close_date;
		if (!groups[day]) {
			groups[day] = [];
		}
		groups[day].push(program);
	});
	return groups;
}

export function sort_by_close_asc(programs: ProgramsDateGroup): ProgramDateGroup[] {
	return Object.keys(programs)
		.sort()
		.map((a) => {
			return {
				date: a,
				programs: programs[a]
			};
		});
}

export const month_number_name_map: {
	[key: string]: {
		short: string;
		long: string;
	};
} = {
	'01': {
		short: 'jan',
		long: 'January'
	},
	'02': {
		short: 'feb',
		long: 'February'
	},
	'03': {
		short: 'mar',
		long: 'March'
	},
	'04': {
		short: 'apr',
		long: 'April'
	},
	'05': {
		short: 'may',
		long: 'May'
	},
	'06': {
		short: 'jun',
		long: 'June'
	},
	'07': {
		short: 'jul',
		long: 'July'
	},
	'08': {
		short: 'aug',
		long: 'August'
	},
	'09': {
		short: 'sep',
		long: 'September'
	},
	'10': {
		short: 'oct',
		long: 'October'
	},
	'11': {
		short: 'nov',
		long: 'November'
	},
	'12': {
		short: 'dec',
		long: 'December'
	},
	default: {
		short: '',
		long: ''
	}
};
