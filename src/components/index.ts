import type {App} from 'vue';
import YxsCard from './yxs-card/index'
import YxsTable from './yxs-table/index'
import YxsModal from './yxs-modal/index'

const setupGlobComponents = (app: App) => {
    app.component('yxs-card', YxsCard)
    app.component('yxs-table', YxsTable)
    app.component('yxs-modal', YxsModal)
}

export {
    setupGlobComponents
}