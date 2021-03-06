import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import URL from '../utils/URL';

class DataManager {
	constructor() {
		this._groupList = [];
		this._subscribers = {};
	}

	on = (event, callback) => {
		if (!this._subscribers[event]) {
			this._subscribers[event] = [];
		}

		this._subscribers[event].push(callback);
	};

	notify = (event, ...args) => {
		if (!this._subscribers[event]) {
			return;
		}

		this._subscribers[event].forEach((fn) => {
			fn(...args);
		});
		this.saveData();
	};

	getGroupList = () => {
		return this._groupList;
	};

	setGroupList = (newList) => {
		this._groupList = [...newList];
		this.notify('groupList', this._groupList);
	};

	fetchGroupList = async () => {
		const response = await axios.get(URL['API'] + '?clean=true');
		const groupListRaw = response.data;
		const groupListFormated = Array.from(new Set(groupListRaw.map((e) => e.name)));
		this.setGroupList(groupListFormated);
	};

	saveData = () => {
		AsyncStorage.setItem('groupList', JSON.stringify(this._groupList));
	};

	loadData = async () => {
		try {
			const groupList = JSON.parse(await AsyncStorage.getItem('groupList'));
			if (groupList) {
				this.setGroupList(groupList);
			} else {
				await this.fetchGroupList();
			}
		} catch (error) {
			console.warn('COULDNT RETREIVE GROUP LIST...');
		}
	};
}

export default new DataManager();
