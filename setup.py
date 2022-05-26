import setuptools

with open("README.md", "r", encoding="utf-8") as fh:
    long_description = fh.read()

setuptools.setup(
    name="lcrs",
    version="0.0.1",
    author="Milad Sadeghi DM",
    author_email="EverLookNeverSee@Proton.Me",
    description="LeetCode Related Stuff",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/EverLookNeverSee/LCRS",
    project_urls={
        "Bug Tracker": "https://github.com/EverLookNeverSee/LCRS/issues",
    },
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    package_dir={"": "src"},
    packages=setuptools.find_packages(where="src"),
    python_requires=">=3.8",
)
