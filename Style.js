import Constants from 'expo-constants';

const colors = {
	red: '',
	white: '#FFF',
	green: '#4CAF50',
	gray: '#454545',
	lightblue: '#40C4FF',
	blue: '#006F9F',
	darkblue: '#0D47A1',
	darkred: '#D50000',
	backgroundGrey: '#E9E9EF',
};

const hintColors = {
	green: '#55da59',
	gray: '#9a9a9a',
};

const colors200 = {
	red: '#EF9A9A',
	pink: '#F48FB1',
	purple: '#CE93D8',
	deepPurple: '#B39DDB',
	indigo: '#9FA8DA',
	blue: '#90CAF9',
	lightBlue: '#81D4FA',
	cyan: '#80DEEA',
	teal: '#80CBC4',
	green: '#A5D6A7',
	lightGreen: '#C5E1A5',
	lime: '#E6EE9C',
	yellow: '#FFF59D',
	amber: '#FFE082',
	orange: '#FFCC80',
	deepOrange: '#FFAB91',
	brown: '#BCAAA4',
	grey: '#EEEEEE',
	blueGrey: '#B0BEC5',
};

const colors100 = {
	red: '#FFCDD2',
	pink: '#F8BBD0',
	purple: '#E1BEE7',
	deepPurple: '#D1C4E9',
	indigo: '#C5CAE9',
	blue: '#BBDEFB',
	lightBlue: '#B3E5FC',
	cyan: '#B2EBF2',
	teal: '#B2DFDB',
	green: '#C8E6C9',
	lightGreen: '#DCEDC8',
	lime: '#F0F4C3',
	yellow: '#FFF9C4',
	amber: '#FFECB3',
	orange: '#FFE0B2',
	deepOrange: '#FFCCBC',
	brown: '#D7CCC8',
	grey: '#F5F5F5',
	blueGrey: '#CFD8DC',
};

const colors50 = {
	red: '#FFEBEE',
	pink: '#FCE4EC',
	purple: '#F3E5F5',
	deepPurple: '#EDE7F6',
	indigo: '#E8EAF6',
	blue: '#E3F2FD',
	lightBlue: '#E1F5FE',
	cyan: '#E0F7FA',
	teal: '#E0F2F1',
	green: '#E8F5E9',
	lightGreen: '#F1F8E9',
	lime: '#F9FBE7',
	yellow: '#FFFDE7',
	amber: '#FFF8E1',
	orange: '#FFF3E0',
	deepOrange: '#FBE9E7',
	brown: '#EFEBE9',
	grey: '#FAFAFA',
	blueGrey: '#ECEFF1',
};

const Theme = {
	primary: '#009ee0',
	secondary: '#0098c5',
	light: {
		primary: '#009ee0',
		secondary: '#0098c5',
		selection: '#ededed',
		accentFont: 'darkred',
		font: '#202020',
		lightFont: '#F0F0F0',
		link: '#1565c0',
		icon: '#4C5464',
		border: '#CCCCCC',
		background: '#ffffff',
		greyBackground: '#F0F0F0',
		collapsableBackground: '#00000011',
		field: '#ffffff',
		sections: [
			colors50.deepOrange,
			colors50.pink,
			colors50.lightBlue,
			colors50.blueGrey,
			colors50.green,
			colors50.purple,
		],
		sectionsHeaders: [
			colors200.deepOrange,
			colors200.pink,
			colors200.lightBlue,
			colors200.blueGrey,
			colors200.green,
			colors200.purple,
		],
		statusBar: '#006F9F',
		calendar: {
			sunday: '#CCCCCC',
			currentDay: '#EEEEEE',
			selection: '#009EE0',
		},
		settings: {
			switchThumbColor: {
				false: '#E3E3E3',
				true: '#4C5464',
			},
			switchTrackColor: {
				false: '#E3E3E3',
				true: '#E3E3E3',
			},
			background: {
				flex: 1,
				backgroundColor: '#F0F0F0',
			},
			separationText: {
				color: '#4C5464',
				fontSize: 18,
				fontWeight: 'bold',
				marginTop: 12,
				marginLeft: 12,
			},
			button: {
				backgroundColor: '#FFFFFF',
				borderRadius: 16,
				marginHorizontal: 12,
				marginTop: 16,
				paddingVertical: 16,
				flexDirection: 'row',
				alignContent: 'center',
			},
			buttonMainText: {
				fontWeight: '500',
				color: '#4C5464',
				fontSize: 18,
				marginHorizontal: 16,
				alignSelf: 'center',
			},
			buttonSecondaryText: {
				fontWeight: '500',
				color: '#838FA6',
				fontSize: 18,
				marginLeft: 'auto',
				alignSelf: 'center',
			},
			leftIcon: {
				marginLeft: 16,
				color: '#4C5464',
				alignSelf: 'center',
			},
			rightIcon: {
				alignSelf: 'center',
				color: '#4C5464',
				marginHorizontal: 4,
			},
			popup: {
				filters: {
					container: {
						flex: 1,
						flexGrow: 1,
						backgroundColor: '#FFFFFF',
						padding: 16,
						justifyContent: 'space-between',
					},
					header: {
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
						marginTop: 8,
					},
					button: {
						backgroundColor: '#EAEAEC',
						padding: 8,
						borderRadius: 16,
						margin: 8,
						flexDirection: 'row',
						alignItems: 'center',
					},
					buttonText: {
						fontSize: 18,
						fontWeight: 'bold',
						color: '#4C5464',
					},
					iconColor: '#4C5464AA',
					footer: {
						marginTop: 16,
						justifyContent: 'flex-end',
						alignItems: 'flex-end',
						flexDirection: 'row',
						marginHorizontal: 4,
					},
				},
				background: {
					flex: 1,
					justifyContent: 'center',
					backgroundColor: '#000000B3',
				},
				container: {
					backgroundColor: '#FFFFFF',
					borderRadius: 20,
					padding: 16,
					marginHorizontal: 16,
					marginVertical: 50,
				},
				header: {
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
				},
				textHeader: {
					fontWeight: 'bold',
					fontSize: 18,
					color: '#4C5464',
				},
				textDescription: {
					marginVertical: 8,
					fontSize: 16,
					color: '#4C5464C0',
				},
				buttonContainer: {
					flexDirection: 'row',
					justifyContent: 'space-around',
					marginTop: 50,
				},
				buttonSecondary: {
					flex: 1,
					backgroundColor: '#D2D4D8',
					borderRadius: 8,
					paddingVertical: 8,
					marginHorizontal: 4,
					alignItems: 'center',
				},
				buttonMain: {
					flex: 1,
					backgroundColor: '#4C5464',
					borderRadius: 8,
					paddingVertical: 8,
					marginHorizontal: 4,
					alignItems: 'center',
				},
				buttonTextSecondary: {
					fontSize: 18,
					color: '#777474',
				},
				buttonTextMain: {
					fontSize: 18,
					color: '#FFFFFF',
				},
				closeIcon: {
					color: '#D2D4D8',
				},
				radioContainer: {
					flexDirection: 'row',
					alignContent: 'center',
					marginTop: 16,
				},
				radioIconColor: '#4C5464',
				radioText: {
					fontSize: 18,
					marginLeft: 16,
					color: '#4C5464',
				},
				filterListContainer: {
					flex: 1,
					flexDirection: 'row',
					justifyContent: 'space-around',
				},
				textInputContainer: {
					flexDirection: 'row',
					alignItems: 'center',
					marginHorizontal: 4,
					marginTop: 16,
					justifyContent: 'flex-end',
				},
				textInput: {
					borderWidth: 2,
					borderColor: '#4C5464',
					borderRadius: 16,
					padding: 8,
					paddingVertical: Platform.OS === 'ios' ? 8 : 4,
					flex: 1,
					marginRight: 4,
					color: '#4C5464',
				},
				textInputIconColor: '#4C5464',
				textInputPlaceholderColor: '#4C546455',
			},
		},
		courses: {
			'#FFFF00': {
				// TP
				// Lime
				background: '#e6ee9c',
				border: '#E65100',
				line: '#c0ca33',
			},
			'#00FFFF': {
				// Cours
				// Cyan
				background: '#4dd0e1',
				border: '#006064',
				line: '#00acc1',
			},
			'#800040': {
				// Réunion de rentré
				// Blue grey
				background: '#b0bec5',
				border: '#1A237E',
				line: '#546e7a',
			},
			'#808000': {
				// Atelier
				// Blue grey
				background: '#b0bec5',
				border: '#1A237E',
				line: '#546e7a',
			},
			'#800000': {
				// TD Machine
				// Red
				background: '#e57373',
				border: '#B71C1C',
				line: '#e53935',
			},
			'#8000FF': {
				// Oraux
				// Orange
				background: '#ffb74d',
				border: '#311B92',
				line: '#fb8c00',
			},
			'#00FF00': {
				// TD
				// Green
				background: '#81c784',
				border: '#004D40',
				line: '#43a047',
			},
			'#400080': {
				// Cours/TD
				// Indigo
				background: '#7986cb',
				border: '#4A148C',
				line: '#3949ab',
			},
			default: {
				// Indigo
				background: '#7986cb',
				border: '#4A148C',
				line: '#3949ab',
			},
		},
	},
	dark: {
		primary: '#200f21',
		secondary: '#00617E',
		selection: '#00617E',
		accentFont: '#f9fbe7',
		font: '#C2BDC2',
		link: '#4fc3f7',
		lightFont: '#F0F0F0',
		icon: '#00617E',
		border: '#372639',
		background: '#200f21',
		greyBackground: '#200f21',
		field: '#200f21',
		collapsableBackground: '#FFFFFF11',
		sections: ['#141326', '#1E2117', '#2C162D', '#1D2426', '#261313', '#00251a'],
		sectionsHeaders: ['#292839', '#32352C', '#3F2B40', '#313739', '#392828', '#004d40'],
		statusBar: '#000000',
		calendar: {
			sunday: '#002D3A',
			currentDay: '#00617E',
			selection: '#31442C',
		},
		settings: {
			switchThumbColor: {
				false: '#4C5464',
				true: '#D9D9D9',
			},
			switchTrackColor: {
				false: '#451C47',
				true: '#451C47',
			},
			background: {
				flex: 1,
				backgroundColor: '#451C47',
			},
			separationText: {
				color: '#D9D9D9',
				fontSize: 18,
				fontWeight: 'bold',
				marginTop: 12,
				marginLeft: 12,
			},
			button: {
				backgroundColor: '#674669',
				borderRadius: 16,
				marginHorizontal: 12,
				marginTop: 16,
				paddingVertical: 16,
				flexDirection: 'row',
				alignContent: 'center',
			},
			buttonMainText: {
				fontWeight: '500',
				color: '#D9D9D9',
				fontSize: 18,
				marginHorizontal: 16,
				alignSelf: 'center',
			},
			buttonSecondaryText: {
				fontWeight: '500',
				color: '#B1A5B2',
				fontSize: 18,
				marginLeft: 'auto',
				alignSelf: 'center',
			},
			leftIcon: {
				marginLeft: 16,
				color: '#D9D9D9',
				alignSelf: 'center',
			},
			rightIcon: {
				alignSelf: 'center',
				color: '#D9D9D9',
				marginHorizontal: 4,
			},
			popup: {
				filters: {
					container: {
						flex: 1,
						flexGrow: 1,
						backgroundColor: '#451C47',
						padding: 16,
						justifyContent: 'space-between',
					},
					header: {
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
						marginTop: 8,
					},
					button: {
						backgroundColor: '#674669',
						padding: 8,
						borderRadius: 16,
						margin: 8,
						flexDirection: 'row',
						alignItems: 'center',
					},
					buttonText: {
						fontSize: 18,
						fontWeight: 'bold',
						color: '#FFFFFFAA',
					},
					iconColor: '#FFFFFFAA',
					footer: {
						marginTop: 16,
						justifyContent: 'flex-end',
						alignItems: 'flex-end',
						flexDirection: 'row',
						marginHorizontal: 4,
					},
				},
				background: {
					flex: 1,
					justifyContent: 'center',
					backgroundColor: '#000000B3',
				},
				container: {
					backgroundColor: '#674669',
					borderRadius: 20,
					padding: 16,
					marginHorizontal: 16,
					marginVertical: 50,
				},
				header: {
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
				},
				textHeader: {
					fontWeight: 'bold',
					fontSize: 18,
					color: '#FFFFFF',
				},
				textDescription: {
					marginVertical: 8,
					fontSize: 16,
					color: '#D9D1D9',
				},
				buttonContainer: {
					flexDirection: 'row',
					justifyContent: 'space-around',
					marginTop: 50,
				},
				buttonSecondary: {
					flex: 1,
					backgroundColor: '#B3A3B4',
					borderRadius: 8,
					paddingVertical: 8,
					marginHorizontal: 4,
					alignItems: 'center',
				},
				buttonMain: {
					flex: 1,
					backgroundColor: '#FFFFFF',
					borderRadius: 8,
					paddingVertical: 8,
					marginHorizontal: 4,
					alignItems: 'center',
				},
				buttonTextSecondary: {
					fontSize: 18,
					color: '#484148',
				},
				buttonTextMain: {
					fontSize: 18,
					color: '#404040',
				},
				closeIcon: {
					color: '#8D748E',
				},
				radioContainer: {
					flexDirection: 'row',
					alignContent: 'center',
					marginVertical: 8,
				},
				radioIconColor: '#D9D9D9',
				radioText: {
					fontSize: 18,
					marginLeft: 16,
					color: '#D9D9D9',
				},
				filterListContainer: {
					flex: 1,
					flexDirection: 'row',
					justifyContent: 'space-around',
				},
				textInputContainer: {
					flexDirection: 'row',
					alignItems: 'center',
					marginHorizontal: 4,
					marginTop: 16,
					justifyContent: 'flex-end',
				},
				textInput: {
					borderWidth: 2,
					borderColor: '#D9D9D9',
					borderRadius: 16,
					padding: 8,
					paddingVertical: Platform.OS === 'ios' ? 8 : 4,
					flex: 1,
					marginRight: 4,
					color: '#D9D9D9',
				},
				textInputIconColor: '#D9D9D9',
				textInputPlaceholderColor: '#D9D9D955',
			},
		},
		courses: {
			'#FFFF00': {
				// TP
				// Lime
				background: '#7c8500',
				border: '#B71C1C',
				line: '#b4a647',
			},
			'#00FFFF': {
				// Cours
				// Cyan
				background: '#006064',
				border: '#006064',
				line: '#428e92',
			},
			'#800040': {
				// Réunion de rentré
				// Blue grey
				background: '#37474f',
				border: '#1A237E',
				line: '#4f5b62',
			},
			'#808000': {
				// Réunion de rentré
				// Blue grey
				background: '#37474f',
				border: '#1A237E',
				line: '#4f5b62',
			},
			'#800000': {
				// TD MACHINE
				// Red
				background: '#b71c1c',
				border: '#004D40',
				line: '#f05545',
			},
			'#8000FF': {
				// Oraux
				// Orange
				background: '#e65100',
				border: '#311B92',
				line: '#ff833a',
			},
			'#00FF00': {
				// TD
				// Green
				background: '#1b5e20',
				border: '#4A148C',
				line: '#4c8c4a',
			},
			'#400080': {
				// Cours/TD
				// Indigo
				background: '#283593',
				border: '#E65100',
				line: '#534bae',
			},
			default: {
				// Indigo
				background: '#283593',
				border: '#E65100',
				line: '#534bae',
			},
		},
	},
};

export default {
	fonts: {
		default: {
			fontFamily: 'system',
		},
	},
	colors,
	hintColors,
	backButton: {
		paddingLeft: 16,
		paddingRight: 32,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	about: {
		title: {
			fontWeight: 'bold',
			fontSize: 24,
		},
		view: {
			padding: 10,
		},
		content: {
			marginTop: 5,
			marginBottom: 15,
		},
	},
	stackNavigator: {
		headerStyle: {
			backgroundColor: Theme.primary,
		},
		headerTitleStyle: {
			color: colors.white,
			marginBottom: 20,
			marginTop: 20,
			fontSize: 22,
		},
		headerBackTitleStyle: {
			color: colors.white,
		},
		headerTintColor: colors.white,
	},
	containerView: {
		margin: 20,
		marginTop: 30,
	},
	list: {
		searchInputView: {
			flex: 0,
		},
		searchInput: {
			height: 40,
			paddingLeft: 5,
			color: 'white',
		},
		sectionList: {
			flex: 0,
		},
		sections: [
			{ backgroundColor: colors50.deepOrange },
			{ backgroundColor: colors50.pink },
			{ backgroundColor: colors50.lightBlue },
			{ backgroundColor: colors50.blueGrey },
			{ backgroundColor: colors50.green },
			{ backgroundColor: colors50.purple },
		],
		sectionHeaders: [
			{ backgroundColor: colors200.deepOrange },
			{ backgroundColor: colors200.pink },
			{ backgroundColor: colors200.lightBlue },
			{ backgroundColor: colors200.blueGrey },
			{ backgroundColor: colors200.green },
			{ backgroundColor: colors200.purple },
		],
		homeView: {
			flex: 1,
			backgroundColor: 'transparent',
		},
		view: {
			backgroundColor: 'transparent',
			borderWidth: 0,
			borderBottomColor: colors.gray,
			paddingHorizontal: 20,
			paddingVertical: 10,
			justifyContent: 'space-between',
		},
		sectionHeaderView: {
			backgroundColor: 'white',
			height: 40,
			flex: 1,
			flexDirection: 'column',
			justifyContent: 'space-around',
			alignItems: 'center',
			alignContent: 'center',
			borderBottomColor: colors.gray,
			borderRadius: 4,
			marginHorizontal: 8,
			marginTop: 8,
			shadowOpacity: 0.3,
			shadowColor: '#666',
			shadowOffset: {
				width: 0,
				height: 3,
			},
		},
		sectionHeaderTitle: {
			textAlign: 'center',
			fontSize: 18,
			fontWeight: 'bold',
			color: 'white',
		},
	},
	weekView: {
		dayTitle: {
			textAlign: 'center',
			fontSize: 18,
			fontWeight: 'bold',
		},
	},
	schedule: {
		course: {
			root: {
				flexDirection: 'column',
				borderColor: colors.darkblue,
				padding: 8,
				borderWidth: 0,
				marginHorizontal: 12,
				marginVertical: 1,
				backgroundColor: '#EEEEEE',
			},
			row: {
				justifyContent: 'space-between',
				flexDirection: 'row',
			},
			hours: {
				borderRightWidth: 5,
				borderColor: colors.lightblue,
				flexDirection: 'column',
				justifyContent: 'space-between',
				alignContent: 'center',
				alignItems: 'center',
				paddingRight: 8,
				paddingVertical: 2,
				flexShrink: 0,
				backgroundColor: 'transparent',
			},
			hoursText: {
				fontWeight: 'bold',
			},
			contentType: {
				// marginBottom: 16,
				alignSelf: 'stretch',
				flexDirection: 'row',
				justifyContent: 'space-between',
			},
			contentBlock: {
				flex: 1,
				justifyContent: 'flex-start',
				alignItems: 'flex-start',
				flexDirection: 'column',
				marginLeft: 8,
			},
			noCourse: {
				paddingVertical: 10,
				justifyContent: 'space-between',
			},
			noCourseText: {
				fontStyle: 'italic',
				textAlign: 'center',
				color: '#5d5d5d',
				fontWeight: 'bold',
			},
			title: {
				fontSize: 16,
				paddingTop: 0,
				textAlign: 'center',
				fontWeight: 'bold',
			},
			header: {
				flexDirection: 'column',
			},
			container: {
				flexDirection: 'column',
			},
			content: {
				flexWrap: 'wrap',
			},
			groupsContainer: {
				flexWrap: 'wrap',
				flexDirection: 'row',
			},
			iconHeader: {
				width: 18,
				height: 18,
				marginRight: 8,
				flexDirection: 'row',
				justifyContent: 'center',
				alignItems: 'center',
			},
			groupsHeader: {},
			groupsContent: {
				alignSelf: 'stretch',
				flex: 1,
				flexDirection: 'column',
			},
			line: {
				flexDirection: 'row',
				justifyContent: 'flex-start',
				flexWrap: 'wrap',
			},
			centeredLine: {
				flexDirection: 'row',
				justifyContent: 'center',
				flexWrap: 'wrap',
			},
		},
		containerView: {
			flex: 1,
			flexDirection: 'column',
			justifyContent: 'space-around',
			alignItems: 'center',
		},
		titleView: {
			justifyContent: 'center',
			flexDirection: 'row',
			alignSelf: 'stretch',
			alignItems: 'center',
		},
		contentView: {
			flex: 1,
			alignSelf: 'stretch',
		},
		titleText: {
			fontSize: 24,
			fontWeight: 'bold',
			textAlign: 'center',
			paddingVertical: 8,
		},
		error: {
			fontSize: 20,
			textAlign: 'center',
			fontWeight: 'bold',
		},
	},
	statusBar: {
		backgroundColor: Theme.primary,
		height: Constants.statusBarHeight,
	},
	dayView: {},
	calendarList: {
		itemSize: 64,
		header: 38,
	},
	offline: {
		groups: {
			text: {
				textAlign: 'center',
				fontSize: 12,
				fontStyle: 'italic',
			},
		},
	},
	Theme,
};
