import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
    async model(){
        return {
            businessTypes: await this.store.query('business-type', {})
        }
    }

    setupController(controller, models){
        controller.set('businessTypes', models.businessTypes)
    }
}
