import Route from '@ember/routing/route';

export default class RegisterRoute extends Route {
    async model(){
        return {
            businessTypes: await this.store.query('business-type', {})
        }
    }

    setupController(controller, models){
        controller.set('businessTypes', models.businessTypes)
    }
}
