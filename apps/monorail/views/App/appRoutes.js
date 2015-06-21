'use strict';

import React from 'react'; // eslint-disable-line no-unused-vars
import { Route, Redirect, NotFoundRoute, DefaultRoute } from 'react-router';

import App from './App';
import Node, { CreateNode } from '../Node';
import Nodes from '../Nodes';
import Workflow, { CreateWorkflow } from '../Workflow';
import Workflows from '../Workflows';
import WorkflowBuilder from '../WorkflowBuilder';
import Activities from '../Activities';
import Tasks from '../Tasks';
import Jobs from '../Jobs';
import Dashboard from '../Dashboard';
import NotFound from 'common-web-ui/views/NotFound';

/** Routes: https://github.com/rackt/react-router/blob/master/docs/api/views/Route.md
  *
  * Routes are used to declare your view hierarchy.
  *
  * Say you go to http://material-ui.com/#/views/paper
  * The react router will search for a route named 'paper' and will recursively render its
  * handler and its parent handler like so: Paper > views > Master
  */
export default (
  <Route name="root" path="/" handler={App}>
    <DefaultRoute handler={Dashboard}/>
    <Route name="workflows" handler={Workflows} />
    <Route name="newWorkflow" path="/workflows/new" handler={CreateWorkflow} />
    <Route name="workflow" path="/workflows/:workflowId" handler={Workflow} />
    <Route name="nodes" handler={Nodes} />
    <Route name="newNode" path="/nodes/new" handler={CreateNode} />
    <Route name="node" path="/nodes/:nodeId" handler={Node} />
    <Route name="activities" handler={Activities} />
    <Route name="tasks" handler={Tasks} />
    <Route name="jobs" handler={Jobs} />
    <Route name="builder" handler={WorkflowBuilder} />
    <Route name="builder/:workflowId" handler={WorkflowBuilder} />
    <NotFoundRoute handler={NotFound}/>
    <Redirect from="dash" to="/" />
  </Route>
);