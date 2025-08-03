"use client"
const Cover = () => {
    return (
        <div>
            <div className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-white">
                {/* Navigation */}
                <nav className="flex items-center justify-between px-6 py-4 shadow">
                    <h2 className="text-2xl font-bold">MyBrand</h2>
                </nav>

                {/* Hero Section */}
                <section className="flex flex-col items-center text-center px-4 py-10 ">
                    <h1 className="text-4xl font-bold mb-4">Grow Your Business Faster</h1>
                    <p className="text-lg mb-6 max-w-xl">
                        Get more leads and customers with our smart marketing tools.
                    </p>

                    <form className="flex flex-col sm:flex-row gap-2 items-center">
                        <input
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="px-4 py-2 rounded border border-gray-300 w-full sm:w-72 text-gray-800"
                            required
                        />
                        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                            Get Started Free
                        </button>
                    </form>
                </section>

                {/* Features Section */}
                <section className="px-6 py-10" data-aos="fade-up">
                    <h2 className="text-2xl font-semibold mb-4 text-center">Why Choose Us?</h2>
                    <ul className="list-disc pl-8 space-y-2 max-w-2xl mx-auto">
                        <li>Easy-to-use dashboard</li>
                        <li>AI-powered insights to make smart decisions</li>
                        <li>24/7 customer support</li>
                        <li>Scalable for small to large businesses</li>
                    </ul>

                </section>

                {/* Testimonials Section */}
                <section className="px-6 py-10 bg-white dark:bg-gray-800" data-aos="fade-right">
                    <h2 className="text-2xl font-semibold mb-6 text-center">What Our Users Say</h2>
                    <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded shadow">
                            <p>"This tool doubled my customer base in just 2 months!"</p>
                            <span className="text-sm text-gray-600 dark:text-gray-300">– Priya, Startup Founder</span>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded shadow">
                            <p>"The AI insights saved me hours of work every week."</p>
                            <span className="text-sm text-gray-600 dark:text-gray-300">– Rahul, Marketing Manager</span>
                        </div>
                    </div>
                </section>

                {/* Pricing Plans */}
                <section className="px-6 py-10" data-aos="zoom-in">
                    <h2 className="text-2xl font-semibold text-center mb-6">Simple Pricing</h2>
                    <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <div className="border rounded-lg p-6 text-center shadow bg-white dark:bg-gray-800">
                            <h3 className="text-xl font-bold">Free</h3>
                            <p className="text-2xl mt-2 mb-4">$0/month</p>
                            <p>Basic features to get started.</p>
                        </div>
                        <div className="border-2 border-blue-600 rounded-lg p-6 text-center shadow bg-blue-50 dark:bg-blue-900">
                            <h3 className="text-xl font-bold">Pro</h3>
                            <p className="text-2xl mt-2 mb-4">$19/month</p>
                            <p>All features, unlimited usage.</p>
                        </div>
                        <div className="border rounded-lg p-6 text-center shadow bg-white dark:bg-gray-800">
                            <h3 className="text-xl font-bold">Enterprise</h3>
                            <p className="text-2xl mt-2 mb-4">Custom</p>
                            <p>For teams with advanced needs.</p>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="px-6 py-10 bg-white dark:bg-gray-900" data-aos="fade-up">
                    <h2 className="text-2xl font-semibold text-center mb-6">FAQs</h2>
                    <div className="max-w-2xl mx-auto space-y-4">
                        <div>
                            <h4 className="font-bold">Is there a free trial?</h4>
                            <p>Yes! You can try all features free for 14 days.</p>
                        </div>
                        <div>
                            <h4 className="font-bold">Can I cancel anytime?</h4>
                            <p>Absolutely. You can cancel or change plans anytime.</p>
                        </div>
                    </div>
                </section>

                {/*  free section */}
                <section className="text-center px-4 py-10" data-aos="zoom-in-up">
                    <h2 className="text-3xl font-bold mb-4">Ready to grow your business?</h2>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
                        Start Free Trial
                    </button>
                </section>

                {/* Footer */}
                <footer className="text-center py-6 border-t mt-6 text-sm">
                    © 2025 MyBrand. All rights reserved.
                </footer>
            </div>
        </div>
    );
};

export default Cover;
