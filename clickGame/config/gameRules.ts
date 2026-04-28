export interface RewardBracket {
    maxLevel: number;
    xpAmount: number;
    goldMultiplier: number;
}

// Add lines like: { maxLevel: 25, xpAmount: 12000, goldMultiplier: 3.5 },
// Mabye an idea later for balancing to user the goldmultipler? 
export const REWARD_BRACKETS: RewardBracket[] = [
    { maxLevel: 5,  xpAmount: 0,    goldMultiplier: 1.0 },
    { maxLevel: 10, xpAmount: 750,  goldMultiplier: 1.5 },
    { maxLevel: 15, xpAmount: 5000, goldMultiplier: 2.0 },
];

/**
 * Helper to find the current scaling based on level
 */
export const getScalingForLevel = (level: number): RewardBracket => {
    const bracket = REWARD_BRACKETS.find(b => level <= b.maxLevel);
    
    // Default fallback if level is higher than our brackets
    return bracket || { maxLevel: 999, xpAmount: 25000, goldMultiplier: 5.0 };
};