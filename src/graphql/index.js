function graphql(query, variables = {}) {
  return fetch('http://localhost:3000/admin/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      variables,
      query,
    }),
  }).then(function(result) {
    return result.json();
  });
};

export default graphql;
