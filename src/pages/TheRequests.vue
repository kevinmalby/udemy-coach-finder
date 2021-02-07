<template>
  <q-page>
    <q-card>
      <q-card-section>
        <div class="row justify-center">
          <h4 class="q-mb-md">Requests Received</h4>
        </div>
        <received-request
          v-for="receivedRequest in receivedRequests"
          :key="receivedRequest.email"
          :email="receivedRequest.email"
          :message="receivedRequest.message"
        >
        </received-request>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import ReceivedRequest from './../components/requests/ReceivedRequest';
export default {
    components: {
        ReceivedRequest
    },
    data() {
        return {
            receivedRequests: [
                {
                    email: 'firstExample@gmail.com',
                    message: 'Some example message'
                },
                {
                    email: 'secondExample@yahoo.com',
                    message: 'Some other example message. This one is a bit longer'
                }
            ]
        }
    }
}
</script>