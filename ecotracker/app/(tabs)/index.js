import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  Image
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons, Ionicons, AntDesign, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

const WelcomeQuoteScreen = ({ onClose }) => (
  <View style={styles.quoteContainer}>
    <TouchableOpacity style={styles.closeButton} onPress={onClose}>
      <AntDesign name="close" size={24} color="#2E7D32" />
    </TouchableOpacity>
    <Text style={styles.quote}>
      "The greatest threat to our planet is the belief that someone else will save it."
    </Text>
    <Text style={styles.quoteAuthor}>- Robert Swan</Text>
  </View>
);

const DashboardTab = () => (
  <ScrollView 
    style={styles.tabContent}
    showsVerticalScrollIndicator={true}
    contentContainerStyle={styles.scrollContentContainer}
  >
    {/* Carbon Impact Card */}
    <View style={styles.carbonCard}>
      <LinearGradient
        colors={['#2E7D32', '#4CAF50']}
        style={styles.carbonGradient}
      >
        <View style={styles.carbonHeader}>
          <Text style={styles.carbonTitle}>Your Carbon Impact</Text>
          <MaterialCommunityIcons name="information" size={24} color="white" />
        </View>
        <View style={styles.carbonContent}>
          <View style={styles.carbonCircle}>
            <Text style={styles.carbonValue}>2.5</Text>
            <Text style={styles.carbonUnit}>tons CO₂</Text>
          </View>
          <View style={styles.carbonStats}>
            <View style={styles.carbonStat}>
              <Text style={styles.carbonStatLabel}>Monthly Goal</Text>
              <Text style={styles.carbonStatValue}>3.0 tons</Text>
            </View>
            <View style={styles.carbonStat}>
              <Text style={styles.carbonStatLabel}>Reduction</Text>
              <Text style={styles.carbonStatValue}>-15%</Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>

    {/* Achievement Cards */}
    <View style={styles.achievementContainer}>
      <Text style={styles.sectionTitle}>Recent Achievements</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.achievementScroll}>
        {[
          { icon: 'bike', title: 'Cycle Champion', description: 'Cycled 50km this month' },
          { icon: 'lightbulb', title: 'Energy Saver', description: 'Reduced energy by 20%' },
          { icon: 'recycle', title: 'Waste Warrior', description: 'Zero waste for a week' }
        ].map((achievement, index) => (
          <View key={index} style={styles.achievementCard}>
            <View style={styles.achievementIcon}>
              <MaterialCommunityIcons name={achievement.icon} size={30} color="#2E7D32" />
            </View>
            <Text style={styles.achievementTitle}>{achievement.title}</Text>
            <Text style={styles.achievementDesc}>{achievement.description}</Text>
          </View>
        ))}
      </ScrollView>
    </View>

    {/* Quick Actions */}
    <View style={styles.quickActions}>
      <Text style={styles.sectionTitle}>Quick Actions</Text>
      <View style={styles.actionGrid}>
        {[
          { 
            icon: 'calculator', 
            title: 'Calculate', 
            color: '#E8F5E9',
            onPress: () => setShowCalculator(true)
          },
          { 
            icon: 'chart-line', 
            title: 'Track', 
            color: '#E8F5E9',
            onPress: () => {}
          },
          { 
            icon: 'lightbulb-on', 
            title: 'Tips', 
            color: '#E8F5E9',
            onPress: () => {}
          },
          { 
            icon: 'gift', 
            title: 'Rewards', 
            color: '#E8F5E9',
            onPress: () => setActiveTab('rewards')
          }
        ].map((action, index) => (
          <TouchableOpacity 
            key={index} 
            style={[styles.actionCard, { backgroundColor: action.color }]}
            onPress={action.onPress}
          >
            <MaterialCommunityIcons name={action.icon} size={32} color="#2E7D32" />
            <Text style={styles.actionTitle}>{action.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>

    {/* Daily Tips */}  <View style={styles.tipsContainer}>
      <Text style={styles.sectionTitle}>Today's Eco Tips</Text>
      <ScrollView 
        style={styles.tipsScrollView}
        showsVerticalScrollIndicator={true}
      >
        {[
          { 
            icon: 'car-electric',
            title: 'Transportation',
            tip: 'Consider carpooling today to reduce emissions',
            impact: '-2.5 kg CO₂',
            points: 50,
            completed: false
          },
          {
            icon: 'food-apple',
            title: 'Diet',
            tip: 'Try a plant-based meal for lunch',
            impact: '-1.8 kg CO₂',
            points: 30,
            completed: false
          },
          {
            icon: 'lightbulb-outline',
            title: 'Energy',
            tip: 'Switch off unused electronics and lights',
            impact: '-1.2 kg CO₂',
            points: 20,
            completed: false
          },
          {
            icon: 'water',
            title: 'Water Usage',
            tip: 'Take a shorter shower (under 5 minutes)',
            impact: '-0.5 kg CO₂',
            points: 25,
            completed: false
          },
          {
            icon: 'recycle',
            title: 'Waste',
            tip: 'Properly segregate waste for recycling',
            impact: '-1.0 kg CO₂',
            points: 35,
            completed: false
          },
          {
            icon: 'shopping',
            title: 'Shopping',
            tip: 'Use reusable bags for grocery shopping',
            impact: '-0.8 kg CO₂',
            points: 15,
            completed: false
          },
          {
            icon: 'home',
            title: 'Home',
            tip: 'Adjust thermostat by 2 degrees for efficiency',
            impact: '-1.5 kg CO₂',
            points: 40,
            completed: false
          },
          {
            icon: 'bottle-wine',
            title: 'Lifestyle',
            tip: 'Use a reusable water bottle today',
            impact: '-0.3 kg CO₂',
            points: 20,
            completed: false
          }
        ].map((tip, index) => (
          <TouchableOpacity 
            key={index} 
            style={[styles.tipCard, tip.completed && styles.completedTipCard]}            onPress={() => {
              if (!tip.completed) {
                tip.completed = true;
                Alert.alert(
                  "Task Completed!",
                  You earned ${tip.points} eco points!, // Use backticks for template literals
                  [{ text: "OK", onPress: () => console.log("OK Pressed") }]
                );
                
                
              }
            }}
          >
            <View style={styles.tipHeader}>
              <View style={styles.tipIconContainer}>
                <MaterialCommunityIcons 
                  name={tip.completed ? "check-circle" : tip.icon} 
                  size={24} 
                  color={tip.completed ? "#4CAF50" : "#2E7D32"} 
                />
              </View>
              <View style={styles.tipContent}>
                <Text style={[styles.tipTitle, tip.completed && styles.completedText]}>
                  {tip.title}
                </Text>
                <Text style={[styles.tipText, tip.completed && styles.completedText]}>
                  {tip.tip}
                </Text>
              </View>
            </View>
            <View style={styles.tipImpact}>
              <View style={styles.impactContainer}>
                <Text style={styles.impactText}>{tip.impact}</Text>
                <Text style={styles.pointsText}>+{tip.points} points</Text>
              </View>
              <MaterialCommunityIcons 
                name={tip.completed ? "check-circle" : "chevron-right"} 
                size={24} 
                color={tip.completed ? "#4CAF50" : "#2E7D32"} 
              />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>  </ScrollView>
);

const AIRecommendationsTab = () => (
  <ScrollView style={styles.tabContent}>
    {[
      {
        title: 'Transportation',
        icon: 'car-electric',
        tips: [
          'Consider carpooling to work',
          'Use public transportation when possible',
          'Switch to an electric vehicle'
        ]
      },
      {
        title: 'Home Energy',
        icon: 'home-lightning-bolt',
        tips: [
          'Install a smart thermostat',
          'Use natural light during day',
          'Unplug unused electronics'
        ]
      },
      {
        title: 'Diet Choices',
        icon: 'food-apple',
        tips: [
          'Try meatless Mondays',
          'Buy local produce',
          'Reduce food waste'
        ]
      }
    ].map((category, index) => (
      <View key={index} style={styles.recommendationCard}>
        <MaterialCommunityIcons name={category.icon} size={32} color="#2E7D32" />
        <Text style={styles.recommendationTitle}>{category.title}</Text>
        {category.tips.map((tip, tipIndex) => (
          <View key={tipIndex} style={styles.tipItem}>
            <MaterialCommunityIcons name="check-circle" size={20} color="#4CAF50" />
            <Text style={styles.tipItemText}>{tip}</Text>
          </View>
        ))}
      </View>
    ))}
  </ScrollView>
);

const ProfileTab = () => (
  <ScrollView style={styles.tabContent}>
    <View style={styles.profileHeader}>
      <Image
        source={{ uri: 'https://api.a0.dev/assets/image?text=profile%20picture%20avatar&aspect=1:1' }}
        style={styles.profileImage}
      />
      <Text style={styles.profileName}>John Doe</Text>
      <Text style={styles.profileBadge}>Eco Warrior</Text>
    </View>

    <View style={styles.statsContainer}>
      <View style={styles.statItem}>
        <Text style={styles.statNumber}>850</Text>
        <Text style={styles.statLabel}>Eco Points</Text>
      </View>
      <View style={styles.statItem}>
        <Text style={styles.statNumber}>#42</Text>
        <Text style={styles.statLabel}>Ranking</Text>
      </View>
      <View style={styles.statItem}>
        <Text style={styles.statNumber}>15</Text>
        <Text style={styles.statLabel}>Achievements</Text>
      </View>
    </View>

    <View style={styles.leaderboardSection}>
      <Text style={styles.sectionTitle}>Leaderboard</Text>
      {[
        { name: 'Sarah M.', points: 1250, rank: 1 },
        { name: 'Mike R.', points: 1100, rank: 2 },
        { name: 'You', points: 850, rank: 42, isUser: true },
      ].map((user, index) => (        <View key={index} style={[styles.leaderboardItem, user.isUser && styles.userLeaderboardItem]}>
          <Text style={styles.rankNumber}>#{user.rank}</Text>
          <Text style={styles.leaderboardName}>{user.name}</Text>
          <Text style={styles.leaderboardPoints}>{user.points} pts</Text>
        </View>
      ))}
    </View>
  </ScrollView>
);

const RewardsTab = () => (
  <ScrollView style={styles.tabContent}>
    <View style={styles.rewardsHeader}>
      <Text style={styles.rewardsTitle}>Available Rewards</Text>
      <Text style={styles.rewardsPoints}>850 Points Available</Text>
    </View>

    {[
      {
        title: 'Eco-friendly Water Bottle',
        points: 500,
        image: 'water-bottle',
        description: 'Reusable stainless steel bottle'
      },
      {
        title: 'Organic Market Voucher',
        points: 750,
        image: 'shopping-bag',
        description: '$25 voucher for organic products'
      },
      {
        title: 'Solar Power Bank',
        points: 1000,
        image: 'solar-power',
        description: 'Portable solar charging device'
      }
    ].map((reward, index) => (
      <View key={index} style={styles.rewardCard}>
        <MaterialCommunityIcons name={reward.image} size={40} color="#2E7D32" />
        <View style={styles.rewardInfo}>
          <Text style={styles.rewardTitle}>{reward.title}</Text>
          <Text style={styles.rewardDescription}>{reward.description}</Text>
          <Text style={styles.rewardPoints}>{reward.points} points</Text>
        </View>
        <TouchableOpacity 
          style={[
            styles.claimButton,
            { opacity: reward.points <= 850 ? 1 : 0.5 }
          ]}
          disabled={reward.points > 850}
        >
          <Text style={styles.claimButtonText}>Claim</Text>
        </TouchableOpacity>
      </View>
    ))}
  </ScrollView>
);

const MainScreen = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showCalculator, setShowCalculator] = useState(false);
  
  const renderTabContent = () => {
    switch(activeTab) {
      case 'dashboard':
        return <DashboardTab />;
      case 'ai':
        return <AIRecommendationsTab />;
      case 'profile':
        return <ProfileTab />;
      case 'rewards':
        return <RewardsTab />;
      default:
        return <DashboardTab />;
    }
  };  return (
    <View style={styles.mainContainer}>
      {showCalculator ? (
        <CalculatorScreen onClose={() => setShowCalculator(false)} />
      ) : (
        renderTabContent()
      )}
      <View style={styles.tabBar}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'dashboard' && styles.activeTab]} 
          onPress={() => setActiveTab('dashboard')}
        >
          <MaterialCommunityIcons 
            name="view-dashboard" 
            size={24} 
            color={activeTab === 'dashboard' ? '#2E7D32' : '#666'} 
          />
          <Text style={[styles.tabText, activeTab === 'dashboard' && styles.activeTabText]}>
            Dashboard
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'ai' && styles.activeTab]} 
          onPress={() => setActiveTab('ai')}
        >
          <MaterialCommunityIcons 
            name="robot" 
            size={24} 
            color={activeTab === 'ai' ? '#2E7D32' : '#666'} 
          />
          <Text style={[styles.tabText, activeTab === 'ai' && styles.activeTabText]}>
            AI Tips
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.tab, activeTab === 'profile' && styles.activeTab]} 
          onPress={() => setActiveTab('profile')}
        >
          <MaterialCommunityIcons 
            name="account" 
            size={24} 
            color={activeTab === 'profile' ? '#2E7D32' : '#666'} 
          />
          <Text style={[styles.tabText, activeTab === 'profile' && styles.activeTabText]}>
            Profile
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.tab, activeTab === 'rewards' && styles.activeTab]} 
          onPress={() => setActiveTab('rewards')}
        >
          <MaterialCommunityIcons 
            name="gift" 
            size={24} 
            color={activeTab === 'rewards' ? '#2E7D32' : '#666'} 
          />
          <Text style={[styles.tabText, activeTab === 'rewards' && styles.activeTabText]}>
            Rewards
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);
  const [showCountries, setShowCountries] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
    country: '',
    mobile: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!isSignIn) {
      if (!formData.username) {
        newErrors.username = 'Username is required';
      }
      if (!formData.country) {
        newErrors.country = 'Country is required';
      }
      if (!formData.mobile) {
        newErrors.mobile = 'Mobile number is required';
      } else if (!/^\d{10}$/.test(formData.mobile)) {
        newErrors.mobile = 'Invalid mobile number';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Carbon calculation constants
const CARBON_FACTORS = {
  car: 0.404, // kg CO2 per mile
  bus: 0.14,
  train: 0.14,
  plane: 0.285,
  electricity: 0.92, // kg CO2 per kWh
  gas: 0.18, // kg CO2 per kWh
  waste: 0.57, // kg CO2 per kg waste
  beef: 27, // kg CO2 per kg
  pork: 12.1,
  chicken: 6.9,
  fish: 6.1,
  vegetables: 2.0,
  fruits: 1.1
};

const CalculatorScreen = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('manual');
  const [manualData, setManualData] = useState({
    transportation: {
      carMiles: '',
      busMiles: '',
      trainMiles: '',
      flightHours: ''
    },
    energy: {
      electricity: '',
      gas: ''
    },
    food: {
      beef: '',
      pork: '',
      chicken: '',
      fish: '',
      vegetables: '',
      fruits: ''
    },
    waste: {
      generalWaste: ''
    }
  });
  const [totalCarbon, setTotalCarbon] = useState(0);

  const calculateCarbon = () => {
    let total = 0;
    
    // Transportation
    total += (parseFloat(manualData.transportation.carMiles) || 0) * CARBON_FACTORS.car;
    total += (parseFloat(manualData.transportation.busMiles) || 0) * CARBON_FACTORS.bus;
    total += (parseFloat(manualData.transportation.trainMiles) || 0) * CARBON_FACTORS.train;
    total += (parseFloat(manualData.transportation.flightHours) || 0) * CARBON_FACTORS.plane;
    
    // Energy
    total += (parseFloat(manualData.energy.electricity) || 0) * CARBON_FACTORS.electricity;
    total += (parseFloat(manualData.energy.gas) || 0) * CARBON_FACTORS.gas;
    
    // Food
    total += (parseFloat(manualData.food.beef) || 0) * CARBON_FACTORS.beef;
    total += (parseFloat(manualData.food.pork) || 0) * CARBON_FACTORS.pork;
    total += (parseFloat(manualData.food.chicken) || 0) * CARBON_FACTORS.chicken;
    total += (parseFloat(manualData.food.fish) || 0) * CARBON_FACTORS.fish;
    total += (parseFloat(manualData.food.vegetables) || 0) * CARBON_FACTORS.vegetables;
    total += (parseFloat(manualData.food.fruits) || 0) * CARBON_FACTORS.fruits;
    
    // Waste
    total += (parseFloat(manualData.waste.generalWaste) || 0) * CARBON_FACTORS.waste;
    
    setTotalCarbon(total);
  };

  const renderManualCalculator = () => (
    <ScrollView style={styles.calculatorContent}>
      <View style={styles.calculatorSection}>
        <Text style={styles.sectionTitle}>Transportation</Text>
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.calculatorInput}
            placeholder="Car miles per week"
            keyboardType="numeric"
            value={manualData.transportation.carMiles}
            onChangeText={(text) => setManualData({
              ...manualData,
              transportation: { ...manualData.transportation, carMiles: text }
            })}
          />
          <TextInput
            style={styles.calculatorInput}
            placeholder="Bus miles per week"
            keyboardType="numeric"
            value={manualData.transportation.busMiles}
            onChangeText={(text) => setManualData({
              ...manualData,
              transportation: { ...manualData.transportation, busMiles: text }
            })}
          />
          <TextInput
            style={styles.calculatorInput}
            placeholder="Train miles per week"
            keyboardType="numeric"
            value={manualData.transportation.trainMiles}
            onChangeText={(text) => setManualData({
              ...manualData,
              transportation: { ...manualData.transportation, trainMiles: text }
            })}
          />
          <TextInput
            style={styles.calculatorInput}
            placeholder="Flight hours per month"
            keyboardType="numeric"
            value={manualData.transportation.flightHours}
            onChangeText={(text) => setManualData({
              ...manualData,
              transportation: { ...manualData.transportation, flightHours: text }
            })}
          />
        </View>
      </View>

      <View style={styles.calculatorSection}>
        <Text style={styles.sectionTitle}>Energy Usage</Text>
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.calculatorInput}
            placeholder="Electricity (kWh per month)"
            keyboardType="numeric"
            value={manualData.energy.electricity}
            onChangeText={(text) => setManualData({
              ...manualData,
              energy: { ...manualData.energy, electricity: text }
            })}
          />
          <TextInput
            style={styles.calculatorInput}
            placeholder="Gas (kWh per month)"
            keyboardType="numeric"
            value={manualData.energy.gas}
            onChangeText={(text) => setManualData({
              ...manualData,
              energy: { ...manualData.energy, gas: text }
            })}
          />
        </View>
      </View>

      <View style={styles.calculatorSection}>
        <Text style={styles.sectionTitle}>Food Consumption (kg per week)</Text>
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.calculatorInput}
            placeholder="Beef"
            keyboardType="numeric"
            value={manualData.food.beef}
            onChangeText={(text) => setManualData({
              ...manualData,
              food: { ...manualData.food, beef: text }
            })}
          />
          <TextInput
            style={styles.calculatorInput}
            placeholder="Pork"
            keyboardType="numeric"
            value={manualData.food.pork}
            onChangeText={(text) => setManualData({
              ...manualData,
              food: { ...manualData.food, pork: text }
            })}
          />
          <TextInput
            style={styles.calculatorInput}
            placeholder="Chicken"
            keyboardType="numeric"
            value={manualData.food.chicken}
            onChangeText={(text) => setManualData({
              ...manualData,
              food: { ...manualData.food, chicken: text }
            })}
          />
          <TextInput
            style={styles.calculatorInput}
            placeholder="Fish"
            keyboardType="numeric"
            value={manualData.food.fish}
            onChangeText={(text) => setManualData({
              ...manualData,
              food: { ...manualData.food, fish: text }
            })}
          />
          <TextInput
            style={styles.calculatorInput}
            placeholder="Vegetables"
            keyboardType="numeric"
            value={manualData.food.vegetables}
            onChangeText={(text) => setManualData({
              ...manualData,
              food: { ...manualData.food, vegetables: text }
            })}
          />
          <TextInput
            style={styles.calculatorInput}
            placeholder="Fruits"
            keyboardType="numeric"
            value={manualData.food.fruits}
            onChangeText={(text) => setManualData({
              ...manualData,
              food: { ...manualData.food, fruits: text }
            })}
          />
        </View>
      </View>

      <View style={styles.calculatorSection}>
        <Text style={styles.sectionTitle}>Waste</Text>
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.calculatorInput}
            placeholder="General waste (kg per week)"
            keyboardType="numeric"
            value={manualData.waste.generalWaste}
            onChangeText={(text) => setManualData({
              ...manualData,
              waste: { ...manualData.waste, generalWaste: text }
            })}
          />
        </View>
      </View>

      <TouchableOpacity 
        style={styles.calculateButton}
        onPress={calculateCarbon}
      >
        <Text style={styles.calculateButtonText}>Calculate Carbon Footprint</Text>
      </TouchableOpacity>

      {totalCarbon > 0 && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultTitle}>Your Carbon Footprint</Text>
          <Text style={styles.resultValue}>{totalCarbon.toFixed(2)} kg CO₂</Text>
          <Text style={styles.resultComparison}>
            This is {totalCarbon > 1000 ? 'above' : 'below'} average
          </Text>
        </View>
      )}
    </ScrollView>
  );

  const renderAutoCalculator = () => (
    <View style={styles.autoCalculatorContainer}>
      <Text style={styles.autoCalculatorText}>
        Coming soon: Automatic tracking of your travel patterns to calculate carbon footprint
      </Text>
    </View>
  );

  return (
    <View style={styles.calculatorContainer}>
      <View style={styles.calculatorHeader}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <AntDesign name="close" size={24} color="#2E7D32" />
        </TouchableOpacity>
        <Text style={styles.calculatorTitle}>Carbon Calculator</Text>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'manual' && styles.activeTab]}
          onPress={() => setActiveTab('manual')}
        >
          <Text style={[styles.tabText, activeTab === 'manual' && styles.activeTabText]}>
            Manual Entry
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'auto' && styles.activeTab]}
          onPress={() => setActiveTab('auto')}
        >
          <Text style={[styles.tabText, activeTab === 'auto' && styles.activeTabText]}>
            Auto Track
          </Text>
        </TouchableOpacity>
      </View>

      {activeTab === 'manual' ? renderManualCalculator() : renderAutoCalculator()}
    </View>
  );
};

const handleSubmit = () => {
    if (validateForm()) {
      if (!isSignIn) {
        setShowWelcome(true);
      }
      setIsAuthenticated(true);
    }
  };

  if (isAuthenticated) {
    if (showWelcome) {
      return <WelcomeQuoteScreen onClose={() => setShowWelcome(false)} />;
    }
    return <MainScreen />;
  }

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView style={styles.scrollView}>
        <LinearGradient
          colors={['#2E7D32', '#4CAF50']}
          style={styles.header}
        >
          <Ionicons name="leaf" size={50} color="white" />
          <Text style={styles.headerTitle}>Eco Tracker</Text>
          <Text style={styles.headerSubtitle}>Track your carbon footprint</Text>
        </LinearGradient>

        <View style={styles.formContainer}>
          <View style={styles.tabContainer}>
            <TouchableOpacity 
              style={[styles.tab, isSignIn && styles.activeTab]}
              onPress={() => setIsSignIn(true)}
            >
              <Text style={[styles.tabText, isSignIn && styles.activeTabText]}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.tab, !isSignIn && styles.activeTab]}
              onPress={() => setIsSignIn(false)}
            >
              <Text style={[styles.tabText, !isSignIn && styles.activeTabText]}>Sign Up</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.inputContainer}>
            {!isSignIn && (
              <View style={styles.inputWrapper}>
                <MaterialCommunityIcons name="account" size={24} color="#666" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Username"
                  value={formData.username}
                  onChangeText={(text) => setFormData({...formData, username: text})}
                />
                {errors.username && <Text style={styles.errorText}>{errors.username}</Text>}
              </View>
            )}

            <View style={styles.inputWrapper}>
              <MaterialCommunityIcons name="email" size={24} color="#666" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                value={formData.email}
                onChangeText={(text) => setFormData({...formData, email: text})}
              />
              {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
            </View>

            <View style={styles.inputWrapper}>
              <MaterialCommunityIcons name="lock" size={24} color="#666" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={formData.password}
                onChangeText={(text) => setFormData({...formData, password: text})}
              />
              {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
            </View>

            {!isSignIn && (
              <>
                <TouchableOpacity 
                  style={styles.inputWrapper}
                  onPress={() => setShowCountries(!showCountries)}
                >
                  <MaterialCommunityIcons name="earth" size={24} color="#666" style={styles.inputIcon} />
                  <Text style={[styles.input, !formData.country && styles.placeholder]}>
                    {formData.country || "Select Country"}
                  </Text>
                  {errors.country && <Text style={styles.errorText}>{errors.country}</Text>}
                </TouchableOpacity>

                {showCountries && (
                  <View style={styles.countryList}>
                    <ScrollView nestedScrollEnabled={true} style={{ maxHeight: 200 }}>
                      {countries.map((country, index) => (
                        <TouchableOpacity
                          key={index}
                          style={styles.countryItem}
                          onPress={() => {
                            setFormData({...formData, country});
                            setShowCountries(false);
                          }}
                        >
                          <Text style={styles.countryText}>{country}</Text>
                        </TouchableOpacity>
                      ))}
                    </ScrollView>
                  </View>
                )}

                <View style={styles.inputWrapper}>
                  <MaterialCommunityIcons name="phone" size={24} color="#666" style={styles.inputIcon} />
                  <TextInput
                    style={styles.input}
                    placeholder="Mobile Number"
                    keyboardType="phone-pad"
                    value={formData.mobile}
                    onChangeText={(text) => setFormData({...formData, mobile: text})}
                  />
                  {errors.mobile && <Text style={styles.errorText}>{errors.mobile}</Text>}
                </View>
              </>
            )}
          </View>

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>
              {isSignIn ? 'Sign In' : 'Sign Up'}
            </Text>
          </TouchableOpacity>

          {isSignIn && (
            <TouchableOpacity style={styles.forgotPassword}>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  // ... existing styles ...
  calculatorContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  calculatorHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  calculatorTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 20,
  },
  calculatorContent: {
    padding: 20,
  },
  calculatorSection: {
    marginBottom: 20,
  },
  inputGroup: {
    gap: 10,
  },
  calculatorInput: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    fontSize: 16,
  },
  calculateButton: {
    backgroundColor: '#2E7D32',
    padding: 18,
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 20,
  },
  calculateButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  resultTitle: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
  },
  resultValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 10,
  },
  resultComparison: {
    fontSize: 16,
    color: '#666',
  },
  autoCalculatorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  autoCalculatorText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: 40,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerTitle: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 10,
  },
  headerSubtitle: {
    color: 'white',
    fontSize: 16,
    opacity: 0.9,
  },
  formContainer: {
    padding: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#E8F5E9',
    borderRadius: 25,
    padding: 5,
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 20,
  },
  activeTab: {
    backgroundColor: '#2E7D32',
  },
  tabText: {
    fontSize: 16,
    color: '#2E7D32',
    fontWeight: '600',
  },
  activeTabText: {
    color: 'white',
  },
  inputContainer: {
    gap: 15,
  },
  inputWrapper: {
    backgroundColor: 'white',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  inputIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    padding: 15,
    fontSize: 16,
    color: '#333',
  },
  placeholder: {
    color: '#666',
  },
  countryList: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginTop: -10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    zIndex: 1000,
  },
  countryItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  countryText: {
    fontSize: 16,
    color: '#333',
  },
  submitButton: {
    backgroundColor: '#2E7D32',
    padding: 18,
    borderRadius: 25,
    marginTop: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  forgotPassword: {
    marginTop: 15,
    alignItems: 'center',
  },
  forgotPasswordText: {
    color: '#2E7D32',
    fontSize: 16,
  },
  errorText: {
    color: '#FF3B30',
    fontSize: 12,
    marginTop: 5,
    position: 'absolute',
    bottom: -20,
    left: 40,
  },
  // Welcome Quote Screen Styles
  quoteContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    padding: 10,
  },
  quote: {
    fontSize: 28,
    color: '#2E7D32',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
    lineHeight: 38,
  },
  quoteAuthor: {
    fontSize: 18,
    color: '#666',
    fontStyle: 'italic',
  },
  // Tab Bar Styles
  tabBar: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  // Dashboard Styles
  tabContent: {
    flex: 1,
    padding: 20,
  },  // Dashboard Styles
  carbonCard: {
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  carbonGradient: {
    padding: 20,
  },
  carbonHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  carbonTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  carbonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  carbonCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  carbonValue: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
  },
  carbonUnit: {
    color: 'white',
    fontSize: 14,
    opacity: 0.9,
  },
  carbonStats: {
    flex: 1,
    marginLeft: 20,
  },
  carbonStat: {
    marginBottom: 15,
  },
  carbonStatLabel: {
    color: 'white',
    fontSize: 14,
    opacity: 0.9,
  },
  carbonStatValue: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  achievementContainer: {
    marginBottom: 20,
  },
  achievementScroll: {
    marginTop: 10,
  },
  achievementCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    marginRight: 15,
    width: 150,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
  achievementIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  achievementTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  achievementDesc: {
    fontSize: 12,
    color: '#666',
  },
  quickActions: {
    marginBottom: 20,
  },
  actionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  actionCard: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
  actionTitle: {
    marginTop: 10,
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
  },
  tipsContainer: {
    marginBottom: 20,
  },  scrollContentContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  tipsScrollView: {
    maxHeight: '100%',
    width: '100%',
  },
  tipCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
    flexDirection: 'column',
    minHeight: 100,
    width: '100%',
  },
  completedTipCard: {
    backgroundColor: '#F1F8E9',
    borderColor: '#4CAF50',
    borderWidth: 1,
  },
  tipHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  tipIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },  tipContent: {
    flex: 1,
    paddingRight: 10,
  },  tipTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
    flexWrap: 'wrap',
  },  tipText: {
    fontSize: 14,
    color: '#666',
    flexWrap: 'wrap',
    marginBottom: 5,
  },  tipImpact: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  impactContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  pointsText: {
    color: '#4CAF50',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 2,
  },
  completedText: {
    color: '#4CAF50',
    textDecorationLine: 'line-through',
    opacity: 0.8,
  },  impactText: {
    fontSize: 14,
    color: '#2E7D32',
    fontWeight: 'bold',
    flexWrap: 'wrap',
  },
  quickStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statCard: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginVertical: 5,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  aiSuggestionPreview: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  tipCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8F5E9',
    padding: 15,
    borderRadius: 10,
  },
  tipText: {
    flex: 1,
    marginLeft: 15,
    fontSize: 16,
    color: '#333',
  },
  // AI Recommendations Styles
  recommendationCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  recommendationTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 10,
  },
  tipItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  tipItemText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#666',
  },
  // Profile Styles
  profileHeader: {
    alignItems: 'center',
    marginBottom: 30,
  },  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 15,
  },
  profileBadge: {
    fontSize: 16,
    color: '#2E7D32',
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 15,
    marginTop: 5,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  leaderboardSection: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
  },
  leaderboardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  userLeaderboardItem: {
    backgroundColor: '#E8F5E9',
    borderRadius: 10,
  },
  rankNumber: {
    width: 40,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666',
  },
  leaderboardName: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  leaderboardPoints: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  // Rewards Styles
  rewardsHeader: {
    marginBottom: 20,
  },
  rewardsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  rewardsPoints: {
    fontSize: 16,
    color: '#2E7D32',
    marginTop: 5,
  },
  rewardCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  rewardInfo: {
    flex: 1,
    marginLeft: 15,
  },
  rewardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  rewardDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  rewardPoints: {
    fontSize: 14,
    color: '#2E7D32',
    marginTop: 5,
  },
  claimButton: {
    backgroundColor: '#2E7D32',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  claimButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

const countries = [
  "United States", "United Kingdom", "Canada", "Australia", "Germany", "France", "India", 
  "Japan", "Brazil", "South Africa", "Nigeria", "Kenya", "China", "Singapore", "UAE"
];