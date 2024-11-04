import React from 'react';
import {
  AlmostThereButton,
  GhostInput,
  MagneticButton,
  SmartValidation,
  BreathingLoader,
  HapticButton,
  AnticipatoryCard,
  ProgressiveImage,
  ElasticPull,
  ContextMenu,
  MemoryForm
} from './patterns';

export default function Showcase() {
  return (
    <div className="space-y-32">
      <section id="almost-there-button" className="scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6">The "Almost There" Button</h2>
        <p className="text-gray-400 mb-8">Transform dead clicks into engaging moments</p>
        <AlmostThereButton />
      </section>

      <section id="ghost-input" className="scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6">The "Ghost" Input</h2>
        <p className="text-gray-400 mb-8">Guide users through forms with elegant label animations</p>
        <GhostInput />
      </section>

      <section id="magnetic-hover" className="scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6">The "Magnetic" Hover</h2>
        <p className="text-gray-400 mb-8">Make clickable elements respond with subtle attraction</p>
        <MagneticButton />
      </section>

      <section id="smart-validation" className="scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6">The "Smart" Form Validation</h2>
        <p className="text-gray-400 mb-8">Catch errors before they happen with intuitive feedback</p>
        <SmartValidation />
      </section>

      <section id="breathing-loader" className="scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6">The "Breathing" Loading State</h2>
        <p className="text-gray-400 mb-8">Turn waiting time into a calming experience</p>
        <BreathingLoader />
      </section>

      <section id="haptic-feedback" className="scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6">The "Haptic" Click Feedback</h2>
        <p className="text-gray-400 mb-8">Add physical dimension to digital interactions</p>
        <HapticButton />
      </section>

      <section id="anticipatory-hover" className="scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6">The "Anticipatory" Hover State</h2>
        <p className="text-gray-400 mb-8">Predict user actions for lightning-fast responses</p>
        <AnticipatoryCard />
      </section>

      <section id="progressive-image" className="scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6">The "Progressive" Image Load</h2>
        <p className="text-gray-400 mb-8">Transform image loading from jarring to elegant</p>
        <ProgressiveImage />
      </section>

      <section id="elastic-refresh" className="scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6">The "Elastic" Pull-to-Refresh</h2>
        <p className="text-gray-400 mb-8">Add playful physics to mobile interactions</p>
        <ElasticPull />
      </section>

      <section id="contextual-menu" className="scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6">The "Contextual" Right-Click</h2>
        <p className="text-gray-400 mb-8">Replace generic menus with thoughtful options</p>
        <ContextMenu />
      </section>

      <section id="memory-form" className="scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6">The "Memory" Form State</h2>
        <p className="text-gray-400 mb-8">Never lose user input to accidental navigation</p>
        <MemoryForm />
      </section>
    </div>
  );
}