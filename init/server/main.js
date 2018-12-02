import { Meteor } from 'meteor/meteor';

import '../src/api/RequestData';
import '../src/api/User';
import {AppId, secret} from './secret';

Meteor.startup(() => {
  ServiceConfiguration.configurations.remove({
    service: "facebook"
  });
  ServiceConfiguration.configurations.insert({
    service: "facebook",
    appId : AppId,
    secret : secret
});
});

