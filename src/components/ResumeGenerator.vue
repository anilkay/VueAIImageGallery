<script>
import { Vueform, useVueform } from '@vueform/vueform'

export default {
  mixins: [Vueform],
  setup: useVueform,
  data: () => ({
    vueform: {
      schema: {
        personal_information: {
          type: 'group',
          label: 'Personal information',
          schema: {
            Name: {
              type: 'text',
              placeholder: 'Name',
              rules: 'required',
              columns: 6,
            },
            Label: {
              type: 'text',
              placeholder: 'Label',
              rules: 'required',
              columns: 6,
            },
            email: {
              type: 'text',
              placeholder: 'Email address',
              rules: 'required|email|max:255',
              debounce: 300,
              columns: 6,
            },
            phone: {
              type: 'text',
              placeholder: 'Phone number',
              rules: 'required',
              columns: 6,
            },
            summary: {
              type: 'textarea',
              placeholder: 'Summary',
              rules: 'required',
              columns: 12,
            },
            
          }
        },
        work_experience: {
          type: 'group',
          label: 'Work Experience',
          schema: {
            name: {
              type: 'text',
              placeholder: 'Company Name',
              rules: 'required|max:255',
              debounce: 300
            },
            position: {
              type: 'text',
              inputType: 'position',
              placeholder: 'Position',
              rules: [
                'required'
              ],             
            },
            website: {
              type: 'text',
              placeholder: 'Website',
              rules: 'required',
              debounce: 300
            },
            startDate: {
              type: 'date',
              placeholder: 'Start Date',
              rules: 'required',
              debounce: 300
            },
            endDate: {
              type: 'date',
              placeholder: 'End Date',
              rules: 'required',
              debounce: 300
            },
           
          }
        },
       
        submit: {
          type: 'button',
          buttonLabel: 'Generate Resume',
          addClass: 'mt-2',
          submits: true
        }
      },
    },
    
  })
}
</script>