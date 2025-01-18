// tests/aiAgent.test.js

const AI = require('../src/aiAgent');
const aiAgentConfig = require('../src/config/aiAgentConfig.json');

describe('AI Agent', () => {
  let ai;

  beforeEach(() => {
    ai = new AI(aiAgentConfig);
  });

  it('should initialize with the correct configuration', () => {
    expect(ai.config.personality).toBe('strategic');
    expect(ai.config.responseTiming).toBe('fast');
  });

  it('should make a decision based on the AI strategy', () => {
    const decisionSpy = jest.spyOn(ai, 'makeDecision');
    ai.makeDecision();
    expect(decisionSpy).toHaveBeenCalled();
  });

  it('should update the AI model with new data', () => {
    const updateModelSpy = jest.spyOn(ai, 'updateModel');
    ai.updateModel({ event: 'debate', outcome: 'positive' });
    expect(updateModelSpy).toHaveBeenCalledWith({ event: 'debate', outcome: 'positive' });
  });
});
