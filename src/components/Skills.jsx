import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';


const Skills = () => {
  return (
    <section className='section' id="skills">
      <div className="container mx-auto px-10 mt-[180px]">
        <h2 className='text-[30px] lg:text-[36px] uppercase text-center lg:text-center text-4xl font-bold ptx2 mb-10'>Professional skills</h2>
        <div className="container mx-auto">
          <div className='flex flex-col gap-y-8 lg:shrink lg:items-center lg:gap-x-12'>
            <div className='flex-1 text-lg'>
              <motion.div variants={fadeIn('up', 0.3)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
                className='lg:flex lg:gap-x-10 mb-12 max-w-max'>
                <div className='mx-auto lg:mx-0 lg:w-64 '>
                  <h3 className='font-semibold ptx mb-4 mt-6 text-2xl lg:text-left tracking-wider'>Operating systems</h3>
                  <p className='mx-auto lg:mx-0 ctext leading-tight lg:text-left lg:w-64'><span className='leading-tight'>Understanding and troubleshooting issues with different operating systems like Windows, Mac, and Linux.</span></p>
                  <div className="border-b border-white/50 mt-[20px] lg:border-none"></div>
                </div>
                <div className='mx-auto lg:mx-0 lg:w-64'>
                  <h3 className='font-semibold ptx mb-4 mt-6 text-2xl lg:text-left lg:text-2xl tracking-wider'>Networks</h3>
                  <p className='mx-auto lg:mx-0 ctext leading-tight lg:text-left lg:w-64'><span className='leading-tight'>Understanding of network architecture, TCP/IP protocols, routers, switches, and firewalls.</span></p>
                  <div className="border-b border-white/50 mt-[20px] lg:border-none"></div>
                </div>
                <div className='mx-auto lg:mx-0 lg:w-64'>
                  <h3 className='font-semibold ptx mb-4 mt-6 text-2xl lg:text-left lg:text-2xl tracking-wider'>Databases</h3>
                  <p className='mx-auto lg:mx-0 ctext leading-tight lg:text-left lg:w-64'><span className='leading-tight'>Knowledge of database management, domains and administration, including SQL basics and MariaDB.</span></p>
                  <div className="border-b border-white/50 mt-[20px] lg:border-none"></div>
                </div>
                <div className=' mx-auto lg:mx-0 lg:w-64'>
                  <h3 className='font-semibold ptx mb-4 mt-6 text-2xl lg:text-left lg:text-2xl tracking-wider'>Hardware</h3>
                  <p className='mx-auto lg:mx-0 ctext leading-tight lg:text-left lg:w-64'><span className='leading-tight'>Troubleshooting hardware issues like replacing or upgrading memory, hard drives, and other components.</span></p>
                  <div className="border-b border-white/50 mt-[20px] lg:border-none"></div>
                </div>
              </motion.div>
              <motion.div variants={fadeIn('up', 0.3)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
                className='flex-1 lg:flex gap-x-6 lg:gap-x-10 mb-12 max-w-max'>
                <div className=' mx-auto lg:mx-0'>
                  <h3 className='font-primary font-semibold ptx mb-4 mt-6 text-2xl lg:text-left lg:text-xl tracking-wider'>Web Development</h3>
                  <p className='mx-auto lg:mx-0 ctext leading-tight lg:text-left lg:w-64'><span className='leading-tight'>Understanding of web development technologies such as HTML, CSS, JavaScript and DOMs.</span></p>
                  <div className="border-b border-white/50 mt-[20px] lg:border-none"></div>
                </div>
                <div className=' mx-auto lg:mx-0'>
                  <h3 className='font-primary font-semibold ptx mb-4 mt-6 text-2xl lg:text-left lg:text-xl tracking-wider'>Software</h3>
                  <p className='mx-auto lg:mx-0 ctext leading-tight lg:text-left lg:w-64'><span className='leading-tight'>Knowledge to install, update, configure, troubleshoot and maintain software applications used by an organization or any invidual.</span></p>
                  <div className="border-b border-white/50 mt-[20px] lg:border-none"></div>
                </div>
                <div className=' mx-auto lg:mx-0'>
                  <h3 className='font-primary font-semibold ptx mb-4 mt-6 text-2xl lg:text-left lg:text-xl tracking-wider'>Cyber Security</h3>
                  <p className='mx-auto lg:mx-0 ctext leading-tight lg:text-left lg:w-64'><span className='leading-tight'>Knowledge of cybersecurity fundamentals and protocols such as encryption, firewalls, antivirus software, and data backup solutions.</span></p>
                  <div className="border-b border-white/50 mt-[20px] lg:border-none"></div>
                </div>
                <div className=' mx-auto lg:mx-0'>
                  <h3 className='font-primary font-semibold ptx mb-4 mt-6 text-2xl lg:text-left lg:text-xl tracking-wider'>Cloud Services</h3>
                  <p className='mx-auto lg:mx-0 ctext leading-tight lg:text-left lg:w-64'><span className='leading-tight'>Understanding of cloud computing technologies, such as fundamentals of Microsoft Azure, and Active Directory services.</span></p>
                  <div className="border-b border-white/50 mt-[20px] lg:border-none"></div>
                </div>
              </motion.div>
              <motion.div variants={fadeIn('up', 0.3)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
                className='flex-1 lg:flex gap-x-6 lg:gap-x-10 mb-12 max-w-max'>
                <div className=' mx-auto lg:mx-0'>
                  <h3 className='font-primary font-semibold ptx mb-4 mt-6 text-2xl lg:text-left lg:text-xl tracking-wider'>Virtualization</h3>
                  <p className='mx-auto lg:mx-0 ctext leading-tight lg:text-left lg:w-64'><span className='leading-tight'>Understanding of virtualization technologies such as VMware and VirtualBox and working with them.</span></p>
                  <div className="border-b border-white/50 mt-[20px] lg:border-none"></div>
                </div>
                <div className=' mx-auto lg:mx-0'>
                  <h3 className='font-primary font-semibold ptx mb-4 mt-6 text-2xl lg:text-left lg:text-xl tracking-wider'>Mobile devices</h3>
                  <p className='mx-auto lg:mx-0 ctext leading-tight lg:text-left lg:w-64'><span className='leading-tight'>Ability to troubleshoot mobile device issues, mainly iOS -devices.</span></p>
                  <div className="border-b border-white/50 mt-[20px] lg:border-none"></div>
                </div>
                <div className=' mx-auto lg:mx-0'>
                  <h3 className='font-primary font-semibold ptx mb-4 mt-6 text-2xl lg:text-left lg:text-xl tracking-wider'>Overclocking</h3>
                  <p className='mx-auto lg:mx-0 ctext leading-tight lg:text-left lg:w-64'><span className='leading-tight'>Knowledge of boosting CPU and GPU core speeds for maximum PC performance for rendering and increasing in-game performance at high-frame rates.</span></p>
                  <div className="border-b border-white/50 mt-[20px] lg:border-none"></div>
                </div>
                <div className=' mx-auto lg:mx-0'>
                  <h3 className='font-primary font-semibold ptx mb-4 mt-6 text-2xl lg:text-left lg:text-xl tracking-wider'>VPNs</h3>
                  <p className='mx-auto lg:mx-0 ctext leading-tight lg:text-left lg:w-64'><span className='leading-tight'>Knowledge of virtual private networks and how to secure connections through VPNs.</span></p>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;