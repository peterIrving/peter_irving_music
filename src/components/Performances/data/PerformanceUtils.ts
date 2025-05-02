// 3. Create utility functions for Performances
// src/utils/PerformanceUtils.ts
import { performanceData } from '../data/PerformanceData';
import type { Performance } from './Performance';

export function getAllPerformances(): Performance[] {
    return performanceData;
}

export function getPerformanceById(id: string): Performance | undefined {
    return performanceData.find(Performance => Performance.id === id);
}


export function getUpcomingPerformances(): Performance[] {
    const today = new Date();
    return performanceData
        .filter(Performance => Performance.startTime >= today)
        .sort((a, b) => a.startTime.getTime() - b.startTime.getTime());
}