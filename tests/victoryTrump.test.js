// tests/victoryTrump.test.js

const VictoryTrump = require('../src/victoryTrump');
const AI = require('../src/aiAgent');
const victoryTrumpConfig = require('../src/config/victoryTrumpConfig.json');
const aiAgentConfig = require('../src/config/aiAgentConfig.json');

// Mocking AI agent class
jest.mock('../src/aiAgent');

describe('VictoryTrump System', () => {
  it('should initialize the VictoryTrump system with AI Agent', () => {
    const system = new VictoryTrump(victoryTrumpConfig, aiAgentConfig);
    expect(system).toBeDefined();
  });

  it('should start the system and AI agent', () => {
    const system = new VictoryTrump(victoryTrumpConfig, aiAgentConfig);
    system.start();
    expect(AI).toHaveBeenCalled();
  });

  it('should update strategies based on new data', () => {
    const system = new VictoryTrump(victoryTrumpConfig, aiAgentConfig);
    system.updateStrategies({ event: 'debate', outcome: 'positive' });
    expect(AI.prototype.updateModel).toHaveBeenCalled();
  });
});
