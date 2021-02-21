import gql from 'graphql-tag'

export const state = () => ({
  wines: [],
})

export const mutations = {
  updateWines: (state, data) => {
    state.wines = data
  },
}

export const actions = {
  async callApollo({ commit }) {
    let response = await this.app.apolloProvider.defaultClient.query({
      query: gql`
        query GetWines {
          wines {
            name
            year
            ct {
              score
              reviews
            }
            bbs
            price_adj
            bbs_adj
            main_producer {
              name
            }
            main_country {
              name
            }
            district {
              name
            }
            volume {
              value
            }
            price {
              value
            }
            litrePrice {
              value
            }
            availability {
              storeAvailability {
                available
              }
              deliveryAvailability {
                available
              }
            }
            images {
              url
            }
          }
        }
      `,
    })

    await commit('updateWines', response.data.wines)
  },
}
