class service_t {
  constructor(args) {
    // if (!args.context) throw new Error('CONTEXT_REQUIRED')
    // this.context = args.context
  }

  run(params) {
    return this.validate(params).then(params => {
      return this.execute(params)
    })
  }
}

module.exports = {
  service_t
}
