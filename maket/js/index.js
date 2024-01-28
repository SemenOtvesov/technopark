import '@maket/css/style.css';
import click from './listeners/click';
import setSellTime from './globalFn/setSellTime';

addEventListener('click', click);
setSellTime();
