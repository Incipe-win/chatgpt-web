import { ss } from "@/utils/storage";

const LOCAL_NAME = "userStorage";

export interface UserInfo {
	avatar: string;
	name: string;
	description: string;
}

export interface UserState {
	userInfo: UserInfo;
}

export function defaultSetting(): UserState {
	return {
		userInfo: {
			avatar: "https://w.wallhaven.cc/full/5g/wallhaven-5gz8g3.jpg",
			name: "Ethereal",
			description: "Young And Beautiful",
		},
	}
}

export function getLocalState(): UserState {
	const localSetting: UserState | undefined = ss.get(LOCAL_NAME);
	return { ...defaultSetting(), ...localSetting };
}

export function setLocalState(setting: UserState): void {
	ss.set(LOCAL_NAME, setting);
}
