import React, { useEffect, useState } from 'react';

import Race from './models/Race';
import _ from './models/_';

type Scene = number[];

function App() {
  const [step, setStep] = useState(1);

  const [count, setCount] = useState(1);
  const [tryCount, setTryCount] = useState(1);

  const [scenes, setScenes] = useState<Scene[]>([[]]);

  useEffect(() => {
    if (step !== 3) {
      return;
    }
    setScenes(new Race(count, tryCount).result);
  }, [step, count, tryCount]);

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <h1>
          자동차 경주
        </h1>
        <form
          style={{ display: step === 1 ? 'block' : 'none' }}
          onSubmit={(event) => {
            event.preventDefault();
            setStep(2)
        }}
        >
          <h2>
            <label>차 대수</label>
          </h2>
          <input
            id="input-count"
            type="number"
            value={count}
            onChange={(event) => {
              setCount(Number(event.target.value));
            }}
          />
        </form>
        <form
          style={{ display: step === 2 ? 'block' : 'none' }}
          onSubmit={(event) => {
            event.preventDefault();
            setStep(3)
          }}
        >
          <h2>
            <label>이동 시도 횟수</label>
          </h2>
          <input
            id="input-try"
            type="number"
            value={tryCount}
            onChange={(event) => {
              setTryCount(Number(event.target.value));
            }}
          />
        </form>

        <section
          style={{ display: step === 3 ? 'block' : 'none' }}>
          <h2>결과 보기</h2>

          {
            scenes.map((scene, sceneIndex) => {
              return (
                <div key={sceneIndex}>
                  <h3>
                    {sceneIndex + 1}번째 시나리오
                  </h3>
                  <div>
                    {scene.map((car, carIndex) => {
                      return (
                        <div key={carIndex}>
                          <span
                            style={{
                              display: 'inline-block',
                              width: '100px',
                            }}>
                            {carIndex + 1}번째 차
                          </span>
                          {(_.range(scenes.length)).map((sceneNumber) => {
                            return (
                              <div
                                key={sceneNumber}
                                style={{
                                  backgroundColor: sceneNumber < car ? 'red' : 'blue',
                                  width: '20px',
                                  height: '20px',
                                  display: 'inline-block',
                                  margin: '0 5px',
                                }}
                              />
                            );
                          })}
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })
          }

          <button
            type="button"
            onClick={() => {
              setStep(1);
              setCount(1);
              setTryCount(1);
              setScenes([]);
            }}>
            처음으로
          </button>
        </section>
      </main>
    </div>
  );
}

export default App;
