'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../story/story.module.css';
import { chongyangData } from './chongyangData';

export default function ChongyangPage() {
    const [currentPageIndex, setCurrentPageIndex] = useState(0);

    const currentPage = chongyangData[currentPageIndex];
    const isFirstPage = currentPageIndex === 0;
    const isLastPage = currentPageIndex === chongyangData.length - 1;

    const handleNext = () => {
        if (!isLastPage) {
            setCurrentPageIndex(prev => prev + 1);
        }
    };

    const handlePrev = () => {
        if (!isFirstPage) {
            setCurrentPageIndex(prev => prev - 1);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.bookPage}>
                <div className={styles.imageContainer}>
                    <Image
                        src={currentPage.image}
                        alt={`Illustration for page ${currentPage.id}`}
                        width={800}
                        height={500}
                        className={styles.storyImage}
                        priority
                    />
                </div>

                <div className={styles.textContent}>
                    {(() => {
                        const textLines = currentPage.text.split('\n');
                        const pinyinLines = currentPage.pinyin.split('\n');

                        return textLines.map((line, lineIndex) => {
                            const pinyinLine = pinyinLines[lineIndex] || '';
                            const chars = line.split('');
                            const pinyins = pinyinLine.trim().split(/\s+/);
                            let pinyinIndex = 0;

                            return (
                                <div key={lineIndex} className={styles.line}>
                                    {chars.map((char, charIndex) => {
                                        // Skip pinyin for punctuation if your logic requires, 
                                        // or ensure pinyin string has placeholders for punctuation.
                                        // Here we assume simple one-to-one mapping mostly, 
                                        // but need to handle punctuation which often doesn't have pinyin.

                                        // Simple heuristic: if char is punctuation, it might not have a separate pinyin entry 
                                        // or share logic. The BigTalk logic aligns them by index. 
                                        // The pinyin string generated has punctuation.

                                        const currentPinyin = pinyins[pinyinIndex] || '';
                                        pinyinIndex++;
                                        return (
                                            <div key={charIndex} className={styles.charGroup}>
                                                <div className={styles.pinyinText}>{currentPinyin}</div>
                                                <div className={styles.charText}>{char}</div>
                                            </div>
                                        );
                                    })}
                                </div>
                            );
                        });
                    })()}

                    {currentPage.newChars && currentPage.newChars.length > 0 && (
                        <div className={styles.newChars}>
                            <span className={styles.newCharsTitle}>新字 (New Characters):</span>
                            {currentPage.newChars.join('、')}
                        </div>
                    )}
                </div>

                <div className={styles.controls}>
                    <button
                        className={styles.button}
                        onClick={handlePrev}
                        disabled={isFirstPage}
                    >
                        上一页 (Previous)
                    </button>
                    <button
                        className={styles.button}
                        onClick={handleNext}
                        disabled={isLastPage}
                    >
                        下一页 (Next)
                    </button>
                </div>

                <div className={styles.pageNumber}>
                    第 {currentPage.id} 页 / 共 {chongyangData.length} 页
                </div>
            </div>
        </div>
    );
}
