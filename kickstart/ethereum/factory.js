import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x7bb05814677D015C383E5d6e8dB8E4B4e9828DC6'
);

export default instance;
