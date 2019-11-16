//const url = '/api/entries';
const url = 'http://localhost:8080/api/entries';
export const fetchAllEntries = () => {
    return fetch(url)
    .then(resp=>resp.json())
}

export const fetchSingleEntry = (id) => {
    return fetch(`${url}/${id}`)
    .then(response => response.json());
}

export const postEntry = (entry) => {
    return fetch(url,  {
          method: 'POST',
          headers: {'Content-Type': 'application/json' },
          body: JSON.stringify(entry)
      })
  }

  export const deleteEntryWithId = (id) => {
    return fetch(`${url}/${id}`,  {
        method: 'DELETE'
    })
  }
  