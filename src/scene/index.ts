const tools =  {
  trim(str: string, type: boolean): string {
    console.log('test')
		return type ? str.replace(/\s+/g, '') : str.replace(/^\s+|\s+$/g, '');
	},
}
export default tools;