import React from 'react';

export const calculateDistance = (distanceM) => {
    const distanceKm = Math.round(distanceM / 1000 * 1000) / 1000;
    return distanceKm;
};

export const calculateDuration = (durationSec) => {
    const minutes = Math.floor(durationSec / 60);
    const seconds = durationSec % 60;
    return { minutes, seconds };
};