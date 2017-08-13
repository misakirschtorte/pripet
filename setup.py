# pylint: disable=C0103
"""Setup script
"""
from setuptools import setup, find_packages

requires = [
    'Flask',
]

development_requires = [
    'flake8',
    'flake8_docstrings',
    'pylint',
]

testing_requires = [
]

production_requires = [
    'gunicorn',
]

setup(
    name='pripet-application',
    version='0.0.0',
    description='',
    long_description='',
    classifiers=[
        "Programming Language :: Python",
        "Framework :: Flask",
        "Topic :: Internet :: WWW/HTTP",
        "Topic :: Internet :: WWW/HTTP :: WSGI :: Application",
    ],
    author='',
    author_email='',
    url='',
    keywords='web wsgi flask',
    packages=find_packages(),
    include_package_data=True,
    zip_safe=False,
    extras_require={
        'development': development_requires,
        'testing': testing_requires,
        'production': production_requires,
    },
    install_requires=requires,
    message_extractors={'pripet-application': [
        ('**.py', 'python', None),
        ('templates/**.html', 'html', {'input_encoding': 'utf-8'}),
        ('static/**', 'ignore', None),
    ]},
    entry_points="""\
    """,
)
