echo "🚀 Initializing Elite Banking Ecosystem..."

echo "📦 Installing Aurora UI Dependencies..."
cd frontend && npm install && cd ..

echo "☕ Compiling Spring Boot Backend..."
cd backend && ./mvnw clean install && cd ..

echo "✅ System ready! Run './start.sh' to begin banking."