interface Options {
  session?: boolean,
}

class Storage {
  api

  constructor (options: Options) {
    const { session = false } = options
    this.api = session ? window.sessionStorage : window.localStorage
  }

  set (key: string, value: any) {
  }

  get (key: string) {
  }

  remove () {
  }

  clear () {
  }
}

export default Storage
