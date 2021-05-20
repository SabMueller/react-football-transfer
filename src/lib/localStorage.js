export function saveToLocal(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function loadFromLocal(key) {
  try {
    const localData = localStorage.getItem(key);
    return JSON.parse(localData);
  } catch (error) {
    console.error(error);
  }
}

//try & catch ist für fehler-handling, falls es damit einen fehler gibt
