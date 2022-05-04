import config from '@/config/defaultConfig'

export default   {
	toast(title: string , type?: "none" | "success" | "error" | "loading" ) {
		if (title.length > 15) {
			console.error('toast长度超过15个字符,当前长度为' + title.length)
			return
		}
		uni.showToast({
			title,
			icon: type || 'none',
		})
	},
	confirm(title: any, confirmColor: any) {
		return new Promise((res, rej) => {
			uni.showModal({
				title,
				cancelColor: '#b6b6b6',
				confirmColor: confirmColor || config.modalColor,
				success: (result) => {
					if (result.cancel) {
						rej(result)
					} else if (result.confirm) {
						res(result)
					}
				}

			})
		})
	},
	async message(content: any, confrimText: any) {
		return new Promise((resolve) => {
			uni.showModal({
				title: '提示',
				content,
				showCancel: false,
				confirmColor: config.modalColor,
				success: (result) => {
					resolve(result)
				}
			})
		})
	}
}


