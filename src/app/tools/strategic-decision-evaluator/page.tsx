'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, Clock, TrendingUp, AlertTriangle, Lightbulb, ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface Decision {
  title: string;
  description: string;
  urgency: 'high' | 'medium' | 'low';
  financialImpact: number;
  timeHorizon: number;
  reversibility: 'easy' | 'moderate' | 'difficult';
  emotionalPressure: number;
  informationAvailable: number;
}

export default function StrategicDecisionEvaluatorPage() {
  const [step, setStep] = useState(1);
  const [decision, setDecision] = useState<Decision>({
    title: '',
    description: '',
    urgency: 'medium',
    financialImpact: 5000,
    timeHorizon: 12,
    reversibility: 'moderate',
    emotionalPressure: 5,
    informationAvailable: 5,
  });
  const [showResults, setShowResults] = useState(false);

  const evaluateDecision = () => {
    let actionScore = 0;
    let patienceScore = 0;

    // Urgency evaluation
    if (decision.urgency === 'high') actionScore += 3;
    else if (decision.urgency === 'medium') actionScore += 1;
    else patienceScore += 2;

    // Financial impact
    if (decision.financialImpact > 50000) patienceScore += 2;
    else if (decision.financialImpact > 10000) patienceScore += 1;

    // Time horizon
    if (decision.timeHorizon < 3) actionScore += 2;
    else if (decision.timeHorizon > 12) patienceScore += 2;

    // Reversibility
    if (decision.reversibility === 'difficult') patienceScore += 3;
    else if (decision.reversibility === 'moderate') patienceScore += 1;
    else actionScore += 1;

    // Emotional pressure (high pressure suggests waiting)
    if (decision.emotionalPressure > 7) patienceScore += 2;
    else if (decision.emotionalPressure < 4) actionScore += 1;

    // Information available (low info suggests waiting)
    if (decision.informationAvailable < 4) patienceScore += 2;
    else if (decision.informationAvailable > 7) actionScore += 1;

    return { actionScore, patienceScore };
  };

  const getRecommendation = () => {
    const { actionScore, patienceScore } = evaluateDecision();
    const total = actionScore + patienceScore;
    const actionPercentage = (actionScore / total) * 100;
    const patiencePercentage = (patienceScore / total) * 100;

    if (actionScore > patienceScore + 2) {
      return {
        type: 'action',
        color: 'red',
        title: 'Act Now',
        description: 'This situation calls for decisive action. The factors suggest that waiting could be costly or reduce your options.',
        icon: CheckCircle,
        actionPercentage,
        patiencePercentage,
      };
    } else if (patienceScore > actionScore + 2) {
      return {
        type: 'patience',
        color: 'green',
        title: 'Strategic Patience',
        description: 'The optimal strategy is to wait. More time will provide clarity, reduce risk, and potentially improve outcomes.',
        icon: Clock,
        actionPercentage,
        patiencePercentage,
      };
    } else {
      return {
        type: 'monitor',
        color: 'yellow',
        title: 'Monitor & Prepare',
        description: 'This is a balanced situation. Prepare for action while gathering more information. Set specific triggers for when to act.',
        icon: AlertTriangle,
        actionPercentage,
        patiencePercentage,
      };
    }
  };

  const getDetailedInsights = () => {
    const insights = [];

    if (decision.urgency === 'low') {
      insights.push({
        icon: Clock,
        text: 'Low urgency gives you time to gather information and consider alternatives.',
        type: 'patience',
      });
    }

    if (decision.financialImpact > 20000) {
      insights.push({
        icon: TrendingUp,
        text: 'High financial impact warrants thorough analysis and possibly professional advice.',
        type: 'patience',
      });
    }

    if (decision.reversibility === 'difficult') {
      insights.push({
        icon: AlertTriangle,
        text: 'Difficult to reverse decisions require extra caution and consideration.',
        type: 'patience',
      });
    }

    if (decision.emotionalPressure > 7) {
      insights.push({
        icon: Lightbulb,
        text: 'High emotional pressure can cloud judgment. Consider waiting until emotions settle.',
        type: 'patience',
      });
    }

    if (decision.informationAvailable < 5) {
      insights.push({
        icon: AlertTriangle,
        text: 'Limited information suggests more research is needed before committing.',
        type: 'patience',
      });
    }

    if (decision.timeHorizon < 3 && decision.urgency === 'high') {
      insights.push({
        icon: CheckCircle,
        text: 'Short timeline and high urgency indicate action may be necessary.',
        type: 'action',
      });
    }

    return insights;
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const resetEvaluation = () => {
    setStep(1);
    setDecision({
      title: '',
      description: '',
      urgency: 'medium',
      financialImpact: 5000,
      timeHorizon: 12,
      reversibility: 'moderate',
      emotionalPressure: 5,
      informationAvailable: 5,
    });
    setShowResults(false);
  };

  if (showResults) {
    const recommendation = getRecommendation();
    const insights = getDetailedInsights();
    const Icon = recommendation.icon;

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          >
            {/* Results Header */}
            <div className="text-center mb-8">
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 ${
                recommendation.color === 'green' ? 'bg-green-100' :
                recommendation.color === 'red' ? 'bg-red-100' : 'bg-yellow-100'
              }`}>
                <Icon className={`w-10 h-10 ${
                  recommendation.color === 'green' ? 'text-green-600' :
                  recommendation.color === 'red' ? 'text-red-600' : 'text-yellow-600'
                }`} />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Recommendation: {recommendation.title}
              </h1>
              <p className="text-lg text-gray-600">{recommendation.description}</p>
            </div>

            {/* Decision Summary */}
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-2">{decision.title}</h2>
              <p className="text-gray-600">{decision.description}</p>
            </div>

            {/* Score Visualization */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Decision Analysis</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-semibold text-red-600">Action Now</span>
                    <span className="font-semibold text-red-600">{recommendation.actionPercentage.toFixed(0)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div 
                      className="bg-red-500 h-4 rounded-full transition-all duration-500"
                      style={{ width: `${recommendation.actionPercentage}%` }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-semibold text-green-600">Strategic Patience</span>
                    <span className="font-semibold text-green-600">{recommendation.patiencePercentage.toFixed(0)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div 
                      className="bg-green-500 h-4 rounded-full transition-all duration-500"
                      style={{ width: `${recommendation.patiencePercentage}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Insights */}
            {insights.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Key Factors</h3>
                <div className="space-y-3">
                  {insights.map((insight, index) => {
                    const InsightIcon = insight.icon;
                    return (
                      <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                        <InsightIcon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                          insight.type === 'patience' ? 'text-green-600' : 'text-red-600'
                        }`} />
                        <p className="text-gray-700">{insight.text}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Action Steps */}
            <div className="bg-blue-50 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Recommended Next Steps</h3>
              <ul className="space-y-2">
                {recommendation.type === 'action' ? (
                  <>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Create a detailed action plan with specific steps</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Set a timeline for implementation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Identify potential obstacles and mitigation strategies</span>
                    </li>
                  </>
                ) : recommendation.type === 'patience' ? (
                  <>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Set a specific date to revisit this decision</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Identify what additional information you need</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Use this time to explore alternatives and gather data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Let emotions settle and gain perspective</span>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Define specific triggers that would require immediate action</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Prepare contingency plans for different scenarios</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Monitor key indicators and set review checkpoints</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Gather more information while staying ready to act</span>
                    </li>
                  </>
                )}
              </ul>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={resetEvaluation}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Evaluate Another Decision
              </button>
              <Link
                href="/books"
                className="inline-block bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-semibold text-center hover:bg-blue-50 transition"
              >
                Learn More in the Book
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Strategic Decision Evaluator
          </h1>
          <p className="text-gray-600">
            Evaluate whether to act now or embrace strategic patience using Dr. Moore&apos;s decision framework
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-between mb-8">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center flex-1">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold ${
                s <= step ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                {s}
              </div>
              {s < 3 && (
                <div className={`flex-1 h-1 mx-2 ${
                  s < step ? 'bg-blue-600' : 'bg-gray-200'
                }`} />
              )}
            </div>
          ))}
        </div>

        {/* Form Steps */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8"
          >
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Describe Your Decision</h2>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Decision Title
                  </label>
                  <input
                    type="text"
                    value={decision.title}
                    onChange={(e) => setDecision({ ...decision, title: e.target.value })}
                    placeholder="e.g., Should I buy a new car?"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Description (Optional)
                  </label>
                  <textarea
                    value={decision.description}
                    onChange={(e) => setDecision({ ...decision, description: e.target.value })}
                    placeholder="Provide any additional context..."
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    How urgent is this decision?
                  </label>
                  <div className="grid grid-cols-3 gap-4">
                    {(['low', 'medium', 'high'] as const).map((level) => (
                      <button
                        key={level}
                        onClick={() => setDecision({ ...decision, urgency: level })}
                        className={`p-4 rounded-lg border-2 font-semibold capitalize transition ${
                          decision.urgency === level
                            ? 'border-blue-600 bg-blue-50 text-blue-700'
                            : 'border-gray-200 hover:border-blue-300'
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Financial & Time Factors</h2>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Financial Impact: ${decision.financialImpact.toLocaleString()}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100000"
                    step="1000"
                    value={decision.financialImpact}
                    onChange={(e) => setDecision({ ...decision, financialImpact: Number(e.target.value) })}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>$0</span>
                    <span>$100,000+</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Time Horizon: {decision.timeHorizon} months
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="60"
                    value={decision.timeHorizon}
                    onChange={(e) => setDecision({ ...decision, timeHorizon: Number(e.target.value) })}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1 month</span>
                    <span>5 years</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    How easy is it to reverse this decision?
                  </label>
                  <div className="grid grid-cols-3 gap-4">
                    {(['easy', 'moderate', 'difficult'] as const).map((level) => (
                      <button
                        key={level}
                        onClick={() => setDecision({ ...decision, reversibility: level })}
                        className={`p-4 rounded-lg border-2 font-semibold capitalize transition ${
                          decision.reversibility === level
                            ? 'border-blue-600 bg-blue-50 text-blue-700'
                            : 'border-gray-200 hover:border-blue-300'
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Emotional & Information Factors</h2>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Emotional Pressure: {decision.emotionalPressure}/10
                  </label>
                  <p className="text-sm text-gray-600 mb-3">
                    How much emotional pressure do you feel to make this decision?
                  </p>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={decision.emotionalPressure}
                    onChange={(e) => setDecision({ ...decision, emotionalPressure: Number(e.target.value) })}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Low pressure</span>
                    <span>High pressure</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Information Available: {decision.informationAvailable}/10
                  </label>
                  <p className="text-sm text-gray-600 mb-3">
                    How much information do you have to make an informed decision?
                  </p>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={decision.informationAvailable}
                    onChange={(e) => setDecision({ ...decision, informationAvailable: Number(e.target.value) })}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Very little</span>
                    <span>Comprehensive</span>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={step === 1}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              step === 1
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-white text-gray-700 hover:bg-gray-50 shadow'
            }`}
          >
            Previous
          </button>

          <button
            onClick={handleNext}
            disabled={step === 1 && !decision.title}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              step === 1 && !decision.title
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg'
            }`}
          >
            {step === 3 ? 'Get Recommendation' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
}
