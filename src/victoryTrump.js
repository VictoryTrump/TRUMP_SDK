// src/victoryTrump.js

const AI = require('./aiAgent');
const { logInfo } = require('./utils/logger');
const { parseData } = require('./utils/dataParser');
const victoryTrumpConfig = require('./config/victoryTrumpConfig.json');
const aiAgentConfig = require('./config/aiAgentConfig.json');

// Initialize the system and AI agent
class VictoryTrump {
  constructor(config, aiConfig) {
    this.config = config;
    this.aiAgent = new AI(aiConfig);
  }

  start() {
    logInfo('VictoryTrump system is starting...');
    this.aiAgent.makeDecision();
  }

  updateStrategies(newData) {
    const parsedData = parseData(newData);
    logInfo('Updating strategies based on new data');
    this.aiAgent.updateModel(parsedData);
  }
}

// Instantiate and start the system
const system = new VictoryTrump(victoryTrumpConfig, aiAgentConfig);
system.start();

// Example usage of updating strategies
setTimeout(() => {
  const newData = { event: 'debate', outcome: 'positive' };
  system.updateStrategies(newData);
}, 5000);
