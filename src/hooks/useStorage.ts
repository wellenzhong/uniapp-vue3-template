export default function useStore() {
    return {
        set(key:string,data:any){
            uni.setStorageSync(key,data)
        },
        get(key:string){
            return uni.getStorageSync(key)
        },
        remove(key:string){
            uni.removeStorageSync(key)
        },
        clear(){
            uni.clearStorageSync()
        }
    };
}