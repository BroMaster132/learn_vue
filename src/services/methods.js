export function createId() {
    return new Date().getTime().toString()
}

export function formatDate(date) {
    const _date = new Date(date.seconds * 1000)
    console.log(_date);
    const year = _date.getFullYear()
  
    return  Number(year)
}

