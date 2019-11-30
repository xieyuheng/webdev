async function run_service(
  service_class_t,
  { context = {},
    params = {} }
) {
  const result = await new service_class_t({ context }).run(params)
  return result
}

async function make_router(service_class_t, params_builder, context_builder) {
  return async (req, res) => {
    const result = run_service(service_class_t, {
      logger,
      params  : params_builder(req, res),
      context : context_builder(req, res),
    })

    return render_promise_as_json(req, res, result);
  }
}

async function render_promise_as_json(req, res, promise) {
  const data = await promise
  data.status = 200
  return res.send(data)
}

module.exports = {
  run_service,
  make_router,
}
