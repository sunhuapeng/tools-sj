function trim(str: string, type: boolean): string {
  return type ? str.replace(/\s+/g, '') : str.replace(/^\s+|\s+$/g, '');
}
export default trim