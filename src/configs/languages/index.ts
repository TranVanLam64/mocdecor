class Languages {
    strings: any = {
        vn: {
            'header': 'hello'
        }
    }

    replaceAll(str: string, find: string, replace: string) {
        return str.replace(new RegExp(find, 'g'), replace);
  }

    get(key: string, params: any = {}): string {
        let lang = 'vn';
        if (this.strings[lang]) {
              let temp = this.strings[lang][key];
              if (temp == null || temp == '') {
                    temp = key
              } else {
                    for (const prop in params) {
                          temp = this.replaceAll(temp, `{${prop}}`, params[prop] ? params[prop] : '');
                    }
              }
              if (temp == null) {
                    temp = ''
              }
              return temp.trim();
        } else {
              return key;
        }
  }
}

export default new Languages();