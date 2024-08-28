class LocalStorage {
  constructor() {}

  static setItem(key: string, item: string) {
    if (typeof window === "undefined") {
      return;
    }
    localStorage.setItem(key, item);
  }

  static getItem(key: string) {
    if (typeof window === "undefined") {
      return null;
    }
    return localStorage.getItem(key) as string;
  }

  static removeItem(key: string) {
    if (typeof window === "undefined") {
      return;
    }
    localStorage.removeItem(key);
  }
}

export default LocalStorage;
