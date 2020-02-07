export function listDevRequest() {
  return {
    type: '@dev/LIST_REQUEST',
  };
}

export function listDevSuccess(data) {
  return {
    type: '@dev/LIST_SUCCESS',
    payload: { data },
  };
}

export function addDevRequest(data) {
  return {
    type: '@dev/DEV_REQUEST',
    payload: { data },
  };
}

export function addDevSuccess(data) {
  return {
    type: '@dev/DEV_SUCCESS',
    payload: { data },
  };
}

export function addDevFailure() {
  return {
    type: '@dev/DEV_FAILURE',
  };
}
