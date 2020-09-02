import React from 'react';
import Login from './views/Login';
import Index from './views/Index';

import { BrowserRouter as Router, Route} from 'react-router-dom';

function router() {
	return (
		<Router>
			<Route path="/" component={Login} />
			<Route path="/Index" component={Index} />
		</Router>
	);
}

export default router;
