const locastorage =  {
    set(key: string, value:any){
        localStorage.setItem(key, JSON.stringify(value))
    },
    get(key:string){
        const retrieved:any = localStorage.getItem(key);
        return JSON.parse(retrieved)
    },
    removeItem(key:string){
        localStorage.removeItem(`${key}`)
    }
}

export default locastorage