export default {
    Query: {
        workflow: (_, args) => ({id: args.id})
    },
    Workflow: {
        flows: (workflow) => getFlows(workflow.id)
    },
    Flow: {
        __resolveType() {
            return 'DemoFlowA';
        }
    }
};

function getFlows(id) {

    const workflows = {};
    return [{id: "86756rdtyfg", name: "", description: ""}];
}